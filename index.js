import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import Upload from "./Upload";
import Home from "./Home";
import Navbar from "./Navbar";
import Login from "./Login";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route path="/Upload" component={Upload} />
          <Route path="/Login" component={Login} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
ReactDOM.render(<App />, document.getElementById("root"));
