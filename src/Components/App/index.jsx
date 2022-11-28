import react from "react";
import "./style.css";
import Header from "../Header";
import { Routes, Route } from "react-router";
import Card from "../Card";
import Cards from "../Cards";
import Battle from "../Battle";

class App extends react.Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: "",
    };
  }

  handleMode = (mode) => {
    this.setState({
      mode: mode,
    });
    console.log(this.state.mode);
  };

  render() {
    return (
      <>
      <div className= " app">

        <Header handleMode={this.handleMode} mode={this.state.mode} />
        <Routes>
          <Route element={<Cards />} path="/popular" />,
          <Route element={<Card />} path="/card" />,
          <Route element={<Battle />} path="/battle" />,
        </Routes>
      </div>
      </>
    );
  }
}
export default App;
