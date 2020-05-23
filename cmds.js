const yargs = require('yargs')
const pkgFnc = require('./index-copy')
//console.log("hello")
//add,
yargs.command({
    command: 'stats',
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

yargs.command({
    command: 'stats-dev',
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
    }
})

yargs.command({
    command: 'stats-all',
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

yargs.parse()