import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import Circle from "./components/circle.js";
import Shape from "./components/shape.js";
class ShapeCircle extends Component {
  render(){
  return <Circle />;
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
