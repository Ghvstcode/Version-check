const helperText = () =>{
    console.log(
        `Check all dependencies to see if they are up to date
        Options
          --help     Show help      
          --version  Show version number          
          --path     Path to the package file                        
        
        Missing required argument: path'
    `)
}

module.exports= helperText;