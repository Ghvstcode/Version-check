const fs = require('fs')
const inquirer = require('inquirer');
const chalk = require('chalk')
const ora = require('ora');
const path = require('path')

const parseFunction = require('../utils/parseFunction')
const table = require('../utils/Table')
const getV = require('../utils/getVersion')

const spinner = ora().start();

const pkgFnc = async (dir, type) => {
    let dataBuffer = [];
    let _dir = dir
    
    try{
        let firstdataBuffer = fs.readFileSync(_dir)
        dataBuffer.push(firstdataBuffer)
    } catch(err){
        spinner.stop()
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
                spinner.text = chalk.red("exiting")
                spinner.stopAndPersist("exiting...")
                //exitFnc('Exiting...')
                process.exit(0)
            } 

            if (answers.check === true){
                try{
                    let newDataBuffer = fs.readFileSync(path.join(__dirname, '../', _dir))
                    dataBuffer.push(newDataBuffer)
                    return dataBuffer
                } catch(err){

                    spinner.text = chalk.red("exiting")
                    spinner.stopAndPersist("exited")
                    process.exit(0)
                }
            } 
        });
       
    }
    spinner.text = chalk.yellow("Loading")
    spinner.start()

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
                spinner.succeed("Done")
                table(arr);
            }
            
        }).catch((err)=>{
            console.log(err.name)
            process.exit
        })
    }
}


module.exports = pkgFnc