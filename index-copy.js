const yargs = require('yargs')
const fs = require('fs')
const _ = require('package-json')


const dataBuffer = fs.readFileSync('package.json')
//console.log('buffer:',dataBuffer)

const dataJSON = dataBuffer.toString()
const PackageObject = JSON.parse(dataJSON)
console.log(PackageObject.dependencies, PackageObject.devDependencies)

const L = Object.keys(PackageObject).length

let arr = [] 
for (const property in PackageObject) {

    let rawV = PackageObject[property]
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


