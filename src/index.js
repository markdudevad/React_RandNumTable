import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
<div id="root" />;

class App extends React.Component {
  state = { randNums: 0 };
  componentDidMount() {
    this.interval = setInterval(
      () =>
        this.setState({
          randNums: this.genRandNum()
        }),
      3000
    );
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  genRandNum = () => {
    var min = 1;
    var max = 100;
    var rand = min + Math.random() * (max - min);
    return rand;
  };
  render() {
    return (
      <div>
        <div className="App">
          <h1>Random Number Feed</h1>
        </div>
        <div className="App">
          <h2>{this.state.randNums}</h2>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
