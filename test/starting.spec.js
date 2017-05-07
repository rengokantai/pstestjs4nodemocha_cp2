var assert = require('assert');


describe('t',function(){
    it('should',function(){
        try{
            assert.equal(2,32);
        }catch(e){
            console.log(e);
        }

        //throw({mesage:'error'})
    })
});