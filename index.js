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






const yargs = require('yargs')
const fs = require('fs')
const dataBuffer = fs.readFileSync('../lop.json')
//console.log('buffer:',dataBuffer)
const dataJSON = dataBuffer.toString()
console.log(JSON.parse(dataJSON))
//return JSON.parse(dataJSON)
