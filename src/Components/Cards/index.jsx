import React from "react";
import Card from "../Card";
import Loader from "../Loader";
import "./style.css";

class Cards extends React.Component {
  constructor(props) {
    super(props);
    this.categories = ["All", "JavaScript", "Ruby", "Java", "CSS", "Python"];
    this.state = {
      data: null,
      category: "",
    };
  }
  componentDidMount() {
    this.fetchStars(this.state.category);
  }

  fetchStars = (category) => {
    fetch(
      "https://api.github.com/search/repositories?q=stars:%3E1+language:${category}&sort=stars&order=desc&type=Repositories"
    )
      .then((res) => res.json())
      .then((data) => this.setState({ data: data.items }));
  };

  handleCategory = (event) => {
    this.setState(
      {
        category: event,
        data: null,
      },
      () => this.fetchStars(this.state.category)
    );
    console.log(this.state.category);
  };

  render() {
    console.log(this.state.data);
    let category = this.state.category;
    console.log(category);
    return (
      <>
        <div className="card-section">
          <div className="header-category flex">
            {this.categories.map((category, i) => (
              <div
                key={category.id}
                onClick={() => this.handleCategory({ category })}
                className={this.state.category === {category} ? "active" : ""}
              >
                <h4> {category}</h4>
              </div>
            ))}
          </div>

          <div className="card-container ">
            {this.state.data ? (
              this.state.data.map((user, i) => (
                <Card key={user.id} i={i} user={user} data={this.state.data} />
              ))
            ) : (
              <Loader />
            )}
          </div>
        </div>
      </>
    );
  }
}
export default Cards;
