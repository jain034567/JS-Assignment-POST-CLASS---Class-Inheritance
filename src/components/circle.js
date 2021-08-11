// import using require
var Shape = require('./shape.js'); 
// import Shape from './shape.js';
// declare class
class Circle extends Shape{
    constructor(){
        super();
        this.state = { color:"red"};
    }
 calculateArea(){return " this is circle";}
    render(){
        return({calculateArea});
    }
}
module.exports = Circle;
// export class using module.exports
// // import using require
// var msg = require('./shape.js');
// // declare class


// // export class using module.exports

// module.exports= class Circle extends msg{
//  constructor(...args){
//   super(...args); 
//  }
//   calculateArea(){
//     console.log("2*pi*r"); 
//    return 10;
//   }
// }
