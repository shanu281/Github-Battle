import React from "react";
import Card from "../Card";
import Loader from "../Loader";
import "./style.css";

class Cards extends React.Component {
  constructor(props) {
    super(props);
    this.categories = ["All", "JavaScript", "Ruby", "Java", "Python"];
    this.state = {
      data: null,
      category: "",
    };
  }
  componentDidMount() {
    fetch(
      "https://api.github.com/search/repositories?q=stars:%3E1+language:JavaScript&sort=stars&order=desc&type=Repositories"
    )
      .then((res) => res.json())
      .then((data) => this.setState({ data: data.items }));
  }

  handleCategory = (i) => {
    this.setState({
      category: i,
    });
    console.log(this.state.category);
  };

  render() {
    console.log(this.state.data);
    return (
      <>
        <div className="card-section">
          <div className="header-category flex">
               {this.categories.map((category, i) => (
                   <div
                   key={i}
                   onClick={() => this.handleCategory(i)}
                   className={this.state.category === i ? "active" : ""}
                   >
                <h4> {category}</h4>
              </div>
            ))}
          
          </div>

          <div className="card-container ">
            {this.state.data ? (
              this.state.data.map((user, i) => (
                <Card key={i} i={i} user={user} data={this.state.data} />
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
