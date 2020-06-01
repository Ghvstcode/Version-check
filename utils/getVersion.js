const _ = require('./reqToNpm')

const getVersion = async (PkgName) =>{
    const pkgDetails = await _(PkgName)
    
    const PkgObj = {
        ...pkgDetails
    }
    return PkgObj
}


module.exports = getVersion;