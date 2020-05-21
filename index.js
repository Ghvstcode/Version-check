    //Functionality
//Check if all the packages that are installed are up to date 
//using this CLI tool
//you call it in the directory you want to check if the

//You have to check and see that the path provided is valid!!!
//if it is not valid check outside the directory for  package.json file
//If none is found then, tell the user so!!!

//Loop over the Json object, the dependency by default, 
//You can add a command to check the dev dependencies.

//List Of Commands
//1. the main one that by default checks the cwd for a package. Json file 
//and checks if the packages are up to date
//2. This one collects the path or name of the file and searches it 
//for its dependency status
//3.

const Table = require('cli-table');
var table = new Table({
    head: ['TH 1 label', 'TH 2 label']
//   , colWidths: [100, 200]
});
 
// table is an Array, so you can `push`, `unshift`, `splice` and friends
table.push(
    ['1a', '1b',]
  , ['1c', '1d']
);
 
console.log(table.toString());




// const yargs = require('yargs')
// const fs = require('fs')
// const _ = require('package-json')
// const dataBuffer = fs.readFileSync('package.json')
// //console.log('buffer:',dataBuffer)
// const dataJSON = dataBuffer.toString()
// const PackageObject = JSON.parse(dataJSON).dependencies
// //console.log(PackageObject)

// for (const property in PackageObject) { 
//     console.log(`${property}: ${PackageObject[property]}`);
//     //console.log(property)
//     //const version = async
//     const getV = async (PkgName) =>{
//         const pkgDetails = await _(PkgName)
//         //console.log(await property)

//         return pkgDetails.version
//     }

//     getV(property).then((data)=>{
//         console.log(data)
//     }).catch((err)=>{
//         console.log(err)
//     })

// }

//return JSON.parse(dataJSON)
