// import { component } from 'react';
// // declare class
// class Shape extends Component{
//     constructor(){
//         super();
//         this.state={color:"#000000"};
//     }
//     drawShape=()=>{ return shape = 0;};
//     calculateArea=()=>{let area =2*4;
//     return area;};
//     render(){
//         return(<>
//         {this.state.color} 
//         {this.drawShape} 
//         {this.calculateArea}
//         </>);
//     }
// }
// // export class using module.exports
// module.exports = Shape;
module.exports = class Shape {
    constructor(c){
        this.color=c===undefined?"red":c;
        }
        drawShape(){
            console.log("draw the shape"); 
        }
        calculateArea(){
           console.log("area is area"); 
           return 1;
        }
}
