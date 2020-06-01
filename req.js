const axios = require('axios')


const getPkg = (pkgName) => {

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

    axios.get(url)
    .then(function (response) {
        // handle success
        return {version: response.data['dist-tags'].latest, name: response.data.name};
    })
    .catch(function (error) {
        throw new PackageError(pkgName)
    })
}

module.exports = getPkg;

