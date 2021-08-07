import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import Circle from "./components/circle.js";
class ShapeCircle extends Component {
  render(){
  return (<div>
          <Circle color = "blue" />
          </div>);
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
