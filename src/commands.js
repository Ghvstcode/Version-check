const pkgFnc = require('./pkgFnc')
//console.log("hello")
//add,
const vc =(yargs) => {
    return yargs.command({
        command: 'vc',
        describe: 'Check all dependencies to see if they are up to date',
        builder: {
            path: {
              describe:'Path to the package file' ,
              demandOption: true,
              type:'string'
            },
        },
        handler: function (argv) {
						pkgFnc(argv.path, 'dependencies')
        }
    })
}

const vc_dev= (yargs)=>{
    return yargs.command({
        command: 'vc-dev',
        describe: 'Check all devDependencies to see if they are up to date',
        builder: {
            path: {
              describe:'Path to the package file' ,
              demandOption: true,
              type:'string'
            },
        },
        handler: function (argv) {
					pkgFnc(argv.path, 'devDependencies')
					process.env(0);
        }
    })
}


const vc_all = (yargs) => {
    return yargs.command({
        command: 'vc-all',
        describe: 'Check all dependencies & Dev dependencies to see if they are up to date',
        builder: {
            path: {
              describe:'Path to the package file' ,
              demandOption: true,
              type:'string'
            },
        },
        handler: function (argv) {
            pkgFnc(argv.path, 'all')
        }
    })
}


module.exports = {
    vc,
    vc_dev,
    vc_all
}
