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

        //table.push(data);
        // let prev = curr;
        // var curr = table.toString().split('\n');
        // console.log(curr.slice(prev.length, curr.length).join('\n'));

    
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
const stream = require('stream')
const _ = require('package-json')
const dataBuffer = fs.readFileSync('package.json')
//console.log('buffer:',dataBuffer)
const dataJSON = dataBuffer.toString()
const PackageObject = JSON.parse(dataJSON).dependencies
console.log(PackageObject)
let k = (Object.keys(PackageObject))
let v = (Object.values(PackageObject))
const L = Object.keys(PackageObject).length
//console.log(L)

//for (const property in PackageObject) {
    let properties = []
    
    //console.log(`${property}: ${PackageObject[property]}`);
    //console.log(PackageObject[property])
    //const version = async
    //let rawV = PackageObject[property]
    //let installedV = rawV.replace("^", "")
    //let i = 0
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

    dataArray = [];
    for (var i = 0; i<k.length; i++){
        console.log(k[i])
        //let darray = []
        //dataArray.push(k[i])
        //await dataArray.push(getV(k[i]))
        getV(k[i]).then((data)=>{
            //console.log(k[i],data)
            let ar= Object.values(data)
            //console.log(ar)
            darray.push(ar)
            console.log(darray)
            //return dataArray.push(data)
        })

        //dataArray.push(data)
    }

console.log(dataArray)
    //     getV(property).then((data)=>{
    //         // const EventEmitter = require('events');

    //         // class MyEmitter extends EventEmitter {}
    //         // const myEmitter = new MyEmitter();
    //         // myEmitter.on('data', () => {
    //         //     let name = data.name
    //         //     name = Object.values(data)
    //         //     console.log(name)
    //         //     table(name)
    //         // })

    //         // myEmitter.emit('data');
    //         //let arr = i++
    //         let ar= Object.values(data)
    //         ar.push(Object.values(data), data.version, installedV===data.version)
    //     }).catch((err)=>{
    //         console.log("err")
    //     })

    //     //console.log(arr)
    //     //table(arr)

//}
//console.log(arr)
//return JSON.parse(dataJSON)
