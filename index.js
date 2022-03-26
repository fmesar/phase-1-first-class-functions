function receivesAFunction(callback){
    console.log(callback());
 } 
 
  
let name = ()=> {
      return " My name is Francisco"
  }

function returnsANamedFunction(){
    return function named() {
       console.log("hello")
    }
}

function returnsAnAnonymousFunction(){
    return function () {
        console.log("hello")
     }
 }
