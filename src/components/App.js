import React from "react";
import "./App.css";

const data = [
  {
    id: 1,
    title: "Wiadomosc nr 1",
    body: "Zawartosc numer 1",
  },
  {
    id: 2,
    title: "Wiadomosc nr 2",
    body: "Zawartosc numer 2",
  },
];

setInterval(() => {
  const index = data.length + 1;
  data.push({
    id: index,
    title: `Wiadomosc nr ${index}`,
    body: `Zawartosc numer ${index}`,
  });
}, 5000);

class App extends React.Component {
  state = {
    comments: [...data],
  };

  componentDidMount() {
    this.idInterval = setInterval(this.getData, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.idInterval);
  }

  getData = () => {
    if (this.state.comments.length !== data.length) {
      this.setState({ comments: [...data] });
    }
  };

  render() {
    const comments = this.state.comments.map((comment) => (
      <div key={comment.id}>
        <h4>{comment.title}</h4>
        <div>{comment.body}</div>
      </div>
    ));

    return (
      <>
        <div>Działa</div>
        {comments.reverse()}
      </>
    );
  }
}

export default App;
