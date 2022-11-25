import react from "react";
import Header from "../Header";
import { Routes, Route } from "react-router";
import Card from "../Card";
import Cards from "../Cards";

class App extends react.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <Routes>
          <Route element={<Header />} path="/header" />
          <Route element={<Cards />} path="/cards" />,
          <Route element={<Card />} path="/card" />,
        
        </Routes>
      </>
    );
  }
}
export default App;
