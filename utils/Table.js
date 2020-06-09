const Table = require('cli-table');

const T = (content) =>{
	const table = new Table({
			 style: {head: ['green']},
       head: ['Package Name', 'Latest', 'Installed', 'Up to date?']
    });

    table.push(
        ...content
    );
    
    return table
    // console.log(table.toString())
    
}

module.exports = T

