import React from "react";
import "./App.css";
import Word from "./Word";

class App extends React.Component {
  state = {
    words: [],
    isLoaded: false,
  };

  componentDidMount() {
    setTimeout(this.fetchData, 3000);
  }

  fetchData = () => {
    fetch("data/words.json")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ words: data.words, isLoaded: true });
      });
  };

  render() {
    const words = this.state.words.map((word) => (
      <Word english={word.en} polish={word.pl} />
    ));

    return <>{this.state.isLoaded ? <ul>{words}</ul> : "Wczytuje dane"}</>;
  }
}

export default App;
