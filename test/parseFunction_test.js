const assert = require('assert')
const parseFunction = require('../utils/parseFunction')

describe('Parse the dataBuffer', ()=>{
    it('parses the dataBuffer', ()=>{
        let json = [ 5, false, 55, 'Hello world' ];
        let buffer = Buffer.from(JSON.stringify(json));
        
        const a = parseFunction(buffer)
        assert(a[3] === 'Hello world')
    })
})