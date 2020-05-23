// const { table } = require('table');
// const chalk  = require('chalk');

// function printTable(data, options) {
//     const { createStream } = require('table')
      
//     let config,
//       stream,
//       i;

//     if (!data || !data.length) {
//         return;
//     }
//     options = options || {};
//     options.columns = options.columns ||  Object.keys(data[0]);
//     options.headerStyleFn = options.headerStyleFn || chalk.bold;
//     const header = options.columns.map(property => options.headerStyleFn(property));
//     const tableText = table([
//         header,
//         ...data.map(item => options.columns.map(property => item[property]))
//     ]);
//     console.log(tableText);

//     config = {
//         columnDefault: {
//           width: 50
//         },
//         columnCount: 3,
//     }

//     stream = createStream(config);
//     stream.write(data);
// }

// const data = [
//     ['John',  'Doe' ]
// ];

// // printTable(data);

// printTable(data ,{
//         columns: ['lastName', 'firstName']
//     }
// );

// // printTable(data, {
// //     headerStyleFn: chalk.red
// // });

// // printTable(data, {
// //     headerStyleFn: header => chalk.bold(chalk.red(header))
// // });


// const tableu = (content) =>{
//     // import {
//     //     createStream
//     // } from 'table';

      

//     //     columns: {
//     //       0: {
//     //         width: 10,
//     //         alignment: 'right'
//     //       },
//     //       1: {
//     //         alignment: 'center',
//     //       },
//     //       2: {
//     //         width: 10
//     //       }
//     //     }
//     //   };
      

      
//       i = 0;
      
//       //setInterval(() => {
//         //let random;
      
//         //random = _.sample('abcdefghijklmnopqrstuvwxyz', _.random(1, 30)).join('');
      

//     //   }, 500);
// }

// tableu(data)

const fs = require('fs')

try {
    const f = fs.readFileSync('packag.json') 
} catch(err){
    console.log("Pheeeewwww!!!")
}