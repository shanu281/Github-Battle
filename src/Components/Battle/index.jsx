import React from "react";
import "./style.css";
import { HiUsers } from "react-icons/hi";
import { FaTrophy } from "react-icons/fa";
import { IoIosAirplane } from "react-icons/io";

class Battle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newData: null,
      player1: "",
      player2: "",
    };
  }

  componentDidMount() {
    fetch(
      "https://api.github.com/search/repositories?q=stars:%3E1+language:All&sort=stars&order=desc&type=Repositories"
    )
      .then((res) => res.json())
      .then((data) => this.setState({ newData: data.items }));
  }
handleChange =(event) => {
this.setState({
    player1 : event.target.value
})
console.log(this.state.player1)
}
  render() {
      console.log(this.state.newData)
    return (
      <>
        <div>
          <center>
            <h1>Instructions</h1>
          </center>
          <div className="instructions-container flex">
            <div className="instruction">
              <h5>Enter two Github user</h5>
              <div className="ins-img">
                <HiUsers fontSize="200px" color="orange" />
              </div>
            </div>
            <div className="instruction">
              <h5>Battle</h5>
              <div className="ins-img">
                <IoIosAirplane fontSize="200px" color="grey" />
              </div>
            </div>
            <div className="instruction">
              <h5>See the winner</h5>
              <div className="ins-img">
                <FaTrophy fontSize="200px" color="cyan" />
              </div>
            </div>
          </div>
        </div>
        <div>
          <center>
            <h1>Players</h1>
          </center>

          <div className="player flex">
            <form onClick={this.handleSubmit}>
              <div className=" flex">
                <div>
                  <label htmlFor="text">Player 1</label>
                  <br />
                  <input
                    onChange={this.handleChange}
                    type="text"
                    placeholder="Github username"
                  />
                </div>
                <button className="submit-btn">Submit</button>
              </div>
            </form>

            <form onClick={this.handleSubmit}>
              <div className=" flex">
                <div>
                  <label htmlFor="text">Player 2</label>
                  <br />
                  <input 
                  onChange={this.handleChange}
                  type="text" 
                  placeholder="Github username" />
                </div>
                <button className="submit-btn">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </>
    );
  }
}
export default Battle;
