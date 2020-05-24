const yargs = require('yargs')
const fs = require('fs')
const _ = require('package-json')
const inquirer = require('inquirer');
const chalk = require('chalk')
const ora = require('ora');
const path = require('path')
const table = require('./utils/Table')


const exitFnc = (text)=>{
    const spinner = ora(chalk.red(text)).start();

    setTimeout(() => {
        spinner.color = 'blue';
        spinner.text = chalk.red(text);
        process.exit(0)
    });
}

const parseFunction = (dataB, objSelector) =>{
    const dataJSON = dataB.toString()

    if(objSelector === 'dependencies') {
        const PackageObject = JSON.parse(dataJSON).dependencies
        return PackageObject
    }
    if(objSelector === 'devDependencies') {
        const PackageObject = JSON.parse(dataJSON).devDependencies
        return PackageObject
    }
    if(objSelector === 'all') {
        const PackageObject1 = JSON.parse(dataJSON).dependencies
        const PackageObject2 = JSON.parse(dataJSON).devDependencies

        const PackageObject = {...PackageObject1, ...PackageObject2}
        //console.log("na me :", PackageObject)
        return PackageObject
    }
}

const getV = async (PkgName) =>{
    const pkgDetails = await _(PkgName)
    const PkgObj = {
        name: pkgDetails.name,
        version: pkgDetails.version
    }
    return PkgObj
}

const pkgFnc = async (dir, type) => {
    let dataBuffer = [];
    let _dir = dir
    try{
        let firstdataBuffer = fs.readFileSync(_dir)
        dataBuffer.push(firstdataBuffer)
    } catch(err){
        await inquirer
        .prompt([
            {
            type: 'confirm',
            name: 'check',
            message: `Unable to find the file, would you like to check the parent directory for ${_dir}`,
            default: false
            },
        ])
        .then((answers) => {

            if (answers.check === false){
                exitFnc('Exiting...')
                process.exit(0)
            } 

            if (answers.check === true){
                try{
                    let newDataBuffer = fs.readFileSync(path.join(__dirname, '../', _dir))
                    //Concatenate with ../ to check the parent dir,
                    //return dataBuffer
                    //console.log(newDataBuffer)
                    dataBuffer.push(newDataBuffer)
                    return dataBuffer
                } catch(err){
                    exitFnc('Unable to find file, Exiting...')
                    process.exit(0)
                }
            } 
        });
       
    }

    const PkgObject = parseFunction(dataBuffer[0], type)

    let L = Object.keys(PkgObject).length
    let arr = [] 

    for (const property in PkgObject) {

        let rawV = PkgObject[property]
        let installedV = rawV.replace("^", "")

        getV(property).then((data)=>{
            let ar= Object.values(data)
            ar.push(installedV, installedV===data.version)
            arr.push(ar)


            if(arr.length === L){
                table(arr);
                ora().succeed("Done");
            }
            
        }).catch((err)=>{
            console.log(err.name)
            process.exit
        })
    }
}


module.exports = pkgFnc