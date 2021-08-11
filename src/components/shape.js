import { component } from 'react';
// declare class
class Shape extends Component{
    constructor(){
        super();
        this.state={color:"#000000"};
    }
    drawShape(){ return "this is shape";};
    calculateArea(){return "area";};
    render(){
        return({this.state.color});
    }
}
// export class using module.exports
module.exports = Shape;
// module.exports = class Shape {
//     constructor(c){
//         this.color=c===undefined?"red":c;
//         }
//         drawShape(){
//             console.log("draw the shape"); 
//         }
//         calculateArea(){
//            console.log("area is area"); 
//            return 1;
//         }
// }
