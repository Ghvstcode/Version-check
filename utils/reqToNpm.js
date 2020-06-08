const axios = require('axios')
const chalk = require("chalk");
const red = chalk.red;

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
			.catch((error) => {
			// error handling
			if (!error.status) {
				console.log(
					`${red(
						`Oops😪 It seems you don't have internet connection. Please check and try again.`
					)}`
				);
				process.exit(0);
			}
    })

    return r;
}

module.exports = getPkg;



