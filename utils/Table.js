const Table = require('cli-table');

const T = (content) =>{
	const table = new Table({
			 style: {head: ['green']},
       head: ['Package Name', 'Installed', 'Latest', 'Up to date?']
    });

    table.push(
        ...content
    );
    
    return table
    // console.log(table.toString())
    
}

module.exports = T

