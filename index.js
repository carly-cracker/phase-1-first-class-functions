//const chai = "chai"
//const spices = 'chai-spies'

function chaiz(){
    return "Itakuwaje"
}
function receivesAFunction(callback){
    return callback()
}
receivesAFunction(chaiz)

function returnsANamedFunction(){
    function namedFunction(){
        console.log("ni kunoma joh sijui itakuwa aje")
    }
    return namedFunction
}
 
function returnsAnAnonymousFunction(){
    return function(){
        return "saa ingine ni ngumu"
    }
 
}
const wawa = returnsAnAnonymousFunction()
console.log (wawa())