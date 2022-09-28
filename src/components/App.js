import React from "react";
import "./App.css";
import SwitchButton from "./SwitchButton";

class App extends React.Component {
  state = {
    time: 0,
    acive: false,
  };

  handleClick = () => {
    if (this.state.active) {
      clearInterval(this.idInterval);
      this.setState({ time: 0 });
    } else {
      this.idInterval = setInterval(() => this.addSecond(), 1000);
    }

    this.setState({ active: !this.state.acive });
  };

  addSecond() {
    this.setState({ time: this.state.time + 1 });
  }

  render() {
    return (
      <div className="card">
        <div>
          <p>{this.state.time}</p>
          <SwitchButton onClick={this.handleClick} active={this.state.active} />
        </div>
      </div>
    );
  }
}

export default App;
