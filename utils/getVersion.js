const _ = require('package-json')

const getVersion = async (PkgName) =>{
    const pkgDetails = await _(PkgName)
    const PkgObj = {
        name: pkgDetails.name,
        version: pkgDetails.version
    }
    return PkgObj
}

module.exports = getVersion;