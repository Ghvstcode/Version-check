const Table = require('cli-table');

const T = (content) =>{
    const table = new Table({
       head: ['Package Name', 'installed', 'latest', 'UptoDate']
    });

    table.push(
        ...content
    );
    
    return table
    console.log(table.toString())
    
}

module.exports = T

