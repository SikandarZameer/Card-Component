import React from "react";
import "./styles.css";
import CustomCard from "./Card";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      post: []
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.json())
      .then(data => this.setState({ post: data.reverse() }))
      .catch(error => console.log(error));
  }
  render() {
    const cards = this.state.post.map(p => {
      return (
        <CustomCard
        
          visit_id={p.userId}
          start_date={p.id}
          end_date={p.id}
          amount="27000"
          diagnosis={p.title}
          providers={p.title}
          services={p.title}
          notes={p.body}
        />
      );
    });
    return <div>{cards}</div>;
  }
}
