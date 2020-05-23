const yargs = require('yargs')
const fs = require('fs')
const _ = require('package-json')
const inquirer = require('inquirer');
const chalk = require('chalk')
const ora = require('ora');

const exitFnc = (text)=>{
    const spinner = ora(chalk.red(text)).start();

    setTimeout(() => {
        spinner.color = 'blue';
        spinner.text = chalk.red(text);
        process.exit(0)
    }, 3000);
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

        const PackageObject = {...PackageObject1, PackageObject2}

        return PackageObject
    }
}

const pkgFnc = (dir, type) => {
    let dataBuffer;
    let _dir = 'packge.json'||dir
    try{
        dataBuffer = fs.readFileSync(_dir)
    } catch(err){
       return inquirer
        .prompt([
          {
            type: 'confirm',
            name: 'check',
            message: `Unable to find the file, would you like to check the parent directory for ${_dir}`,
            default: false
          },
        ])
        .then(answers => {

            if (answers.check === false){
                return exitFnc('Exiting...')
            } 
            if (answers.check === true){
                try{
                    dataBuffer = fs.readFileSync(path.join(__dirname, '../', _dir))
                    //Concatenate with ../ to check the parent dir,
                    return dataBuffer
                } catch(err){
                    return exitFnc('Unable to find file, Exiting...')
                }
            } 
        });
    }

    // console.log('buffer:', dataBuffer)

    const PkgObject = parseFunction(dataBuffer, type)

    // console.log(PackageObject.dependencies, PackageObject.devDependencies)

    const L = Object.keys(PkgObject).length

    let arr = [] 
    for (const property in PkgObject) {

        let rawV = PkgObject[property]
        let installedV = rawV.replace("^", "")

        const getV = async (PkgName) =>{
            const pkgDetails = await _(PkgName)
            const PkgObj = {
                name: pkgDetails.name,
                version: pkgDetails.version
            }
            return PkgObj
        }

        getV(property).then((data)=>{
            let ar= Object.values(data)
            ar.push(data.version, installedV===data.version)
            arr.push(ar)

            if(arr.length === L){
                T(arr);

            }
            
        }).catch((err)=>{
            console.log(err.name)
        })
    }

}


module.exports = pkgFnc