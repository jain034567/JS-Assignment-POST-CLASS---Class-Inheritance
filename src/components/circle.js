// import using require
import * as Shape from './shape.js';
// declare class
class Circle extends Shape{
  constructor(props){
    super(props);
    
    calculateArea(){
    this.state.color ="voilet";
  }
render(){
  return (<Shape color = {this.state.color} > </Shape>
);
}
  }
  
}
module.exports = Circle;
// export class using module.exports
