const yargs = require('yargs')
const fs = require('fs')
const _ = require('package-json')
const inquirer = require('inquirer');

// let dataBuffer;
// let _dir = 'packge.json'
// try{
//     dataBuffer = fs.readFileSync(_dir)
// } catch(err){
//    return inquirer
//     .prompt([
//       {
//         type: 'confirm',
//         name: 'check',
//         message: `Unable to find the file, would you like to check the parent directory for ${_dir}`,
//         default: false
//       },
//     ])
//     .then(answers => {
//         if (answers.check === false){
//             const ora = require('ora');

//             const spinner = ora('Exiting').start();

//             setTimeout(() => {
//                 spinner.color = 'yellow';
//                 spinner.text = 'Loading rainbows';
//                 process.exit(0)
//             }, 3000);
//             //exiting animation...
//             //process.exit(0)
//         }
//       //console.info('Answer:', answers.reptiles);
//     });
// }

// console.log('buffer:', dataBuffer)

const a = ()=>{
    const b = 1+8
    return b
}

a()
// const dataJSON = dataBuffer.toString()
// const PackageObject = JSON.parse(dataJSON).
// console.log(PackageObject.dependencies, PackageObject.devDependencies)

// const L = Object.keys(PackageObject).length

// let arr = [] 
// for (const property in PackageObject) {

//     let rawV = PackageObject[property]
//     let installedV = rawV.replace("^", "")

//     const getV = async (PkgName) =>{
//         const pkgDetails = await _(PkgName)
//         const PkgObj = {
//             name: pkgDetails.name,
//             version: pkgDetails.version
//         }
//         return PkgObj
//     }

//     getV(property).then((data)=>{
//         let ar= Object.values(data)
//         ar.push(data.version, installedV===data.version)
//         arr.push(ar)

//         if(arr.length === L){
//             T(arr);

//         }
        
//     }).catch((err)=>{
//         console.log(err.name)
//     })
// }


