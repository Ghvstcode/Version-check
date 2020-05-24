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
        return PackageObject
    }
}

module.exports = parseFunction;