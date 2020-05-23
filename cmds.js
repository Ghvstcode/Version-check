const yargs = require('yargs')
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
        console.log("hello", argv.path)
    }
})

yargs.command({
    command: 'stats-dev',
    describe: 'Check all Devdependencies to see if they are up to date',
    builder: {
        path: {
          describe:'Path to the package file' ,
          demandOption: true,
          type:'string'
        },
    },
    handler: function (argv) {
        console.log("hello", argv.path)
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
        console.log("hello", argv.path)
    }
})

yargs.parse()