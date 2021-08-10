import { component } from 'react';
// declare class
class Shape extends Component{
    constructor(){
        super();
        this.state={color:"#000000"};
    }
    drawShape=()=>{ return shape = 0;};
    calculateArea=()=>{let area =2*4;
    return area;};
    render(){
        return(<>
        {this.state.color} 
        {this.drawShape} 
        {this.calculateArea}
        </>);
    }
}
// export class using module.exports
module.exports = Shape;
