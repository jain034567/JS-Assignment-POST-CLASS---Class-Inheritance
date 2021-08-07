import { component } from 'react';
// declare class
class Shape exptends Component{
constructor(props){
  super(props);
  this.state = {color: "red"};
    drawShape()
    {
      this.state.color = "green";
    }
    calculateArea()
    {
      this.state.color = "yellow";
    }
  
}
  render(){
  return(<>
         <h1 style = {this.state}> I am a color {this.state.color} </h1>
        </>
        );
  }
}
// export class using module.exports
export default Shape;
