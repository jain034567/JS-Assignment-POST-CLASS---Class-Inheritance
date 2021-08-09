import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import * as Circle from "./components/circle.js";
import * as Shape from "./components/shape.js";
class ShapeCircle extends Component {
  render(){
  return <Circle />;
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
