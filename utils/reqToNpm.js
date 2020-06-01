const axios = require('axios')


const getPkg = async (pkgName) => {
    let r;
    class PackageError extends Error {
        constructor(packageName) {
            super(`Package \`${packageName}\` could not be found`);
            this.name = 'PackageNotFoundError';
        }
    }

    if(!pkgName){
        throw new PackageError(pkgName)
    }

    const url = `https://registry.npmjs.org/${pkgName}`

    await axios.get(url)
    .then((response) =>{
        r = {name: response.data.name, version: response.data['dist-tags'].latest}
    })
    .catch(function (error) {
        throw new PackageError(pkgName)
    })

    return r;
}

module.exports = getPkg;



