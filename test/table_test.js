const assert = require('assert')
const TableFunction  = require('../utils/Table')

describe('Draw table function', ()=>{
    it('The content of the table array complete', ()=>{
        const value = 'Anamazingpackage'
        const a = TableFunction(value)
        assert(a.length === value.length)
    })
})