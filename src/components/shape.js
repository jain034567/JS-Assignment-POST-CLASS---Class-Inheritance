import { component } from 'react';
// declare class
class Shape exptends Component{
constructor(props){
super(props);
  function drawShape(){
  }
  function calculateArea(){
  }
  this.state = {color: "red"};
}
  render(){
  return(<>
         <h2> I am a color {this.state.color} </h2>
        </>
        );
  }
}
// export class using module.exports
export default Shape;
