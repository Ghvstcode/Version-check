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

const table = (content) =>{
    var table = new Table({
        head: ['Package Name', 'installed', 'latest', 'UptoDate']
    //   , colWidths: [100, 200]
    });
    
    // table is an Array, so you can `push`, `unshift`, `splice` and friends
    table.push(content);
    
    console.log(table.toString());
}

// const table = (content) =>{
//     // import {
//     //     createStream
//     // } from 'table';
//     const { createStream } = require('table')
      
//       let config,
//         stream,
//         i;
      
//       config = {
//         columnDefault: {
//           width: 100
//         },
//         columnCount: 4,
//         columns: {
//           0: {
//             width: 10,
//             alignment: 'right'
//           },
//           1: {
//             alignment: 'center',
//           },
//           2: {
//             width: 10
//           }
//         }
//       };
      
//       stream = createStream(config);
      
//       i = 0;
      
//       //setInterval(() => {
//         //let random;
      
//         //random = _.sample('abcdefghijklmnopqrstuvwxyz', _.random(1, 30)).join('');
      
//         stream.write(content);
//     //   }, 500);
// }





   // var obj = { "1": 5, "2": 7, "3": 0, "4": 0, "5": 0 }; 
      
    // Using Object.keys() and map() function 
    // to convert convert an Object {} to an  
    // Array [] of key-value pairs 
  


const yargs = require('yargs')
const fs = require('fs')
const _ = require('package-json')
const dataBuffer = fs.readFileSync('package.json')
//console.log('buffer:',dataBuffer)
const dataJSON = dataBuffer.toString()
const PackageObject = JSON.parse(dataJSON).dependencies
//console.log(PackageObject)
const L = Object.keys(PackageObject).length
//console.log(L)

for (const property in PackageObject) { 
    //console.log(`${property}: ${PackageObject[property]}`);
    //console.log(PackageObject[property])
    //const version = async
    let rawV = PackageObject[property]
    let installedV = rawV.replace("^", "")
    let i = 0
    //console.log(installedV)
    const getV = async (PkgName) =>{
        const pkgDetails = await _(PkgName)
        //console.log(await property)
        const PkgObj = {
            name: pkgDetails.name,
            version: pkgDetails.version
        }
        return PkgObj
    }

        getV(property).then((data)=>{
            let arr = i++
            arr= Object.values(data)
            arr.push(data.version, installedV===data.version)
            console.log(i)
            //table(arr)
            //console.log(data)
            //console.log(C)
        }).catch((err)=>{
            console.log(err)
        })


}

//return JSON.parse(dataJSON)
