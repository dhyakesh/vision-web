import React, { Component } from "react";
import firebase from "firebase";
import Button from "@material-ui/core/Button";
import Tab from "./Tab";
var config = {
  apiKey: "AAAAAAAAAAAc",
  authDomain: "AAAAAAAAAAA",
  databaseURL: "hAAAAAAAAAAAm",
  projectId: "AAAAAAAAAAA4",
  storageBucket: "AAAAAAAAAAAm",
  messagingSenderId: "5AAAAAAAAAAA1"
};
var signin = false;
firebase.initializeApp(config);
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    //console.log(user["email"]);
    signin = true;
    //this.setState({ signin: true });
    //console.log(this.state);
  } else {
    // No user is signed in.
  }
});
class Login extends Component {
  componentDidMount() {
    this.authListener();
  }
  authListener = () => {};
  state = {};
  handlemail = e => {
    //console.log(e.target.value);
    this.setState({ email: e.target.value });
  };
  handlepassword = e => {
    //console.log(e.target.value);
    this.setState({ password: e.target.value });
  };
  handlesubmit = e => {
    e.preventDefault();
    //console.log(this.state);
    firebase
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        sigin = false;
        var errorMessage = error.message;
        // ...
      });
    this.setState({ signin });
  };
  handlesignout = e => {
    console.log("signout");
    firebase
      .auth()
      .signOut()
      .then(() => {
        // Sign-out successful.
        signin = false;
        this.setState({ signin: false });
      })
      .catch(function(error) {
        // An error happened.
      });
  };
  render() {
    //console.log(signin);

    if (signin !== true || this.state.siginin) {
      return (
        <div>
          <div className="App">
            <div className="row">
              <div className="col s12 m4 offset-m4">
                <div className="card">
                  <div className="card-action indigo darken-1 white-text">
                    <h3>Login form</h3>
                  </div>
                  <div className="card-content">
                    <div className="form-field">
                      <label htmlFor="username">username</label>
                      <input
                        type="text"
                        id="username"
                        onChange={this.handlemail}
                      />
                    </div>
                    <div className="form-field">
                      <label htmlFor="password">password</label>
                      <input
                        type="password"
                        id="password"
                        onChange={this.handlepassword}
                      />
                    </div>
                    <div className="form-field">
                      <div className="input-field center">
                        <button
                          className="btn indigo"
                          onClick={this.handlesubmit}
                        >
                          Login
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <footer className="page-footer indigo ">
            <div className="container">
              <div className="row">
                <div className="col l6 s12">
                  <p className="grey-text text-lighten-4">
                    Contact: dhyakeshsoundarajan@gmail.com,
                    aashi.sep28@gmail.com
                  </p>
                </div>
              </div>
            </div>
            <div className="footer-copyright">
              <div className="container">
                ©Copyright 2019
                <a className="grey-text text-lighten-4 right" href="#!">
                  Made with <i className="material-icons">favorite</i> by
                  Dhyakesh S & Aasikaa CMR
                </a>
              </div>
            </div>
          </footer>
        </div>
      );
    } else {
      return (
        <div className="container">
          <Button
            size="small"
            onClick={() => {
              console.log("signout");
              firebase
                .auth()
                .signOut()
                .then(() => {
                  // Sign-out successful.
                  signin = false;
                  console.log(signin);
                  this.setState({ signin: false });
                })
                .catch(function(error) {
                  // An error happened.
                });
            }}
          >
            back
          </Button>
          <Tab />
        </div>
      );
    }
  }
}

export default Login;
