import React, { Component } from "react";
import firebase from "firebase";
var config = {
  apiKey: "AIzaSyDO6tNkGcSGQVunHyNeEo-GAJDeNFoU2Vc",
  authDomain: "vision-43124.firebaseapp.com",
  databaseURL: "https://vision-43124.firebaseio.com",
  projectId: "vision-43124",
  storageBucket: "vision-43124.appspot.com",
  messagingSenderId: "519317610341"
};
//firebase.initializeApp(config);
class Upload extends Component {
  state = {};
  fun = e => {
    e.preventDefault();
    console.log("fun");
    console.log(this.state);
    var file = this.state.file;
    var storageRef = firebase.storage().ref("" + this.state.file);
    var task = storageRef.put(file);
    task.on(
      "state_changed",
      function progress(snapshot) {
        var percentage =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log(percentage);
      },
      function error(err) {},
      function complete() {
        storageRef
          .child("" + this.state.file)
          .getDownloadURL()
          .then(function(url) {
            firebase
              .database()
              .ref("uploads/" + this.state.book)
              .set({
                aname: this.state.auth,
                bname: this.state.book,
                url: url
              });
          });
      }
    );
    this.setState({ book: "", auth: "", file: "" });
  };
  handlebook = e => {
    console.log("book");
    this.setState({ book: e.target.value });
  };
  handleauthor = e => {
    console.log("author");
    this.setState({ auth: e.target.value });
  };
  handlefile = e => {
    console.log("file");
    this.setState({ file: e.target.value });
  };
  render() {
    return (
      <div>
        <section className="section container scrollspy" id="contact">
          <div className="row">
            <div className="col s12 l5">
              <img
                src="v2.jpg"
                alt=""
                className="responsive-img materialboxed"
              />
            </div>
            <div className="col s12 l5 offset-l2">
              <form onSubmit={this.fun}>
                <div className="input-field">
                  <i className="material-icons prefix">import_contacts </i>
                  <input
                    type="text"
                    id="book"
                    className="validate"
                    required=""
                    aria-required="true"
                    value={this.state.book}
                    onChange={this.handlebook}
                  />
                  <label htmlFor="book">Book Name</label>
                </div>
                <div className="input-field">
                  <i className="material-icons prefix">person</i>
                  <input
                    type="text"
                    id="author"
                    className="validate"
                    required=""
                    aria-required="true"
                    value={this.state.auth}
                    onChange={this.handleauthor}
                  />
                  <label htmlFor="author">Book Author</label>
                </div>
                <div className="file-field input-field">
                  <div>
                    <i className="material-icons prefix">folder</i>
                    <input
                      type="file"
                      className="validate"
                      required=""
                      accept=".mp3,.wav"
                      aria-required="true"
                      value={this.state.file}
                      onChange={this.handlefile}
                    />
                    <div className="file-path-wrapper">
                      <input
                        className="file-path validate"
                        type="text"
                        placeholder="         Upload Audio Book"
                        value={this.state.file}
                      />
                    </div>
                  </div>
                </div>
                <div className="input-field center">
                  <button className="btn indigo" onClick={this.fun}>
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
        <footer className="page-footer indigo ">
          <div className="container">
            <div className="row">
              <div className="col l6 s12">
                <p className="grey-text text-lighten-4">
                  Contact: dhyakeshsoundarajan@gmail.com, aashi.sep28@gmail.com
                </p>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="container">
              © 2014 Copyright 2019
              <a className="grey-text text-lighten-4 right" href="#!">
                Made with <i className="material-icons">favorite</i> by Dhyakesh
                S & Aasikaa CMR
              </a>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}
export default Upload;
