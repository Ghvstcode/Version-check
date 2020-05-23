const yargs = require('yargs')
const fs = require('fs')
const _ = require('package-json')
const inquirer = require('inquirer');

let dataBuffer;
let _dir = 'packge.json'
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
            console.log("wrong answer shooot")
        }
      //console.info('Answer:', answers.reptiles);
    });
}
// fs.readFile('package.json', (err, data)=>{
//     if(err){
//         //run the enquiry thingy
//         console.log(err)
//     }
//     dataBuffer = data
//     return dataBuffer
// })
console.log('buffer:', dataBuffer)

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


