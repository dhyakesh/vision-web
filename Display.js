import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import classNames from "classnames";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelActions from "@material-ui/core/ExpansionPanelActions";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Chip from "@material-ui/core/Chip";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import AudioPlayer from "react-h5-audio-player";
import * as firebase from "firebase";
var config = {
  apiKey: "",
  authDomain: "m",
  databaseURL: "",
  projectId: "v4",
  storageBucket: "",
  messagingSenderId: ""
};
export default class Display extends Component {
  state = {
    uploads: [{ Bname: "loading" }],
    reports: [{ Bname: "loading" }],
    book: "sample"
  };
  componentDidMount = () => {
    //firebase.initializeApp(config);
    var starCountRef = firebase.database().ref("uploads");
    starCountRef.on("value", snapshot => {
      var uploads = [];
      for (var x in snapshot.val()) {
        uploads.push({ ...snapshot.val()[x], id: x });
        console.log(snapshot.val(), x);
      }
      this.setState({ uploads });
    });
    var starCountRef = firebase.database().ref("reports");
    starCountRef.on("value", snapshot => {
      var reports = [];
      for (var x in snapshot.val()) {
        reports.push({ ...snapshot.val()[x], id: x });
        //console.log(snapshot.val())
      }
      //console.log(reports);
      this.setState({ reports }).then(() => {
        //console.log("sucess");
      });
    });
  };

  handlecancel(ref, id) {
    if (ref == "uploads") {
      var adaRef = firebase.database().ref(ref + "/" + id);
      adaRef
        .remove()
        .then(function() {
          console.log("Remove succeeded.");
        })
        .catch(function(error) {
          console.log("Remove failed: " + error.message);
        });
      console.log(ref, id);
    }
    if (ref == "reports") {
    }
  }
  handlesave = (key, ref, id) => {
    console.log(key, ref, id);
    console.log(this.state);
    if (ref === "uploads") {
      console.log({
        ...this.state.uploads[key],
        approvedby: "gmail"
      });
      var newPostKey = firebase
        .database()
        .ref("books/story")
        .push().key;
      console.log(newPostKey);
      var updates = {};
      updates["books/story/" + newPostKey] = {
        ...this.state.uploads[key],
        approvedby: "gmail"
      };
      var adaRef = firebase.database().ref(ref + "/" + id);
      adaRef
        .remove()
        .then(function() {
          console.log("Remove succeeded.");
        })
        .catch(function(error) {
          console.log("Remove failed: " + error.message);
        });
      console.log(ref, id);
      return firebase
        .database()
        .ref()
        .update(updates);
    }
    if (ref === "reports") {
      var x = this.state.reports;
      console.log(x.splice(key, 1));
      this.setState({ reports: x.splice(key, 1) });
    }
  };
  render() {
    {
      if (this.props.display == 0) {
        return (
          <ul>
            {this.state.uploads.map((data, key) => {
              console.log(data);
              return (
                <ExpansionPanel key={key}>
                  <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                    <div>
                      <Typography>{data.Bname}</Typography>
                    </div>
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails>
                    <Divider />
                    <div>
                      <Typography>
                        BOOK NAME:{data.Bname}
                        <br />
                        AUTHOR NAME:{data.Aname}
                      </Typography>
                    </div>
                  </ExpansionPanelDetails>
                  <AudioPlayer
                    src={data.url}
                    onPlay={e => console.log("onPlay")}
                  />
                  <Divider />
                  <ExpansionPanelActions>
                    <Button
                      size="small"
                      onClick={() => this.handleClick("uploads", data.id)}
                    >
                      remove
                    </Button>
                    <Button
                      size="small"
                      color="primary"
                      onClick={() => this.handlesave(key, "uploads", data.id)}
                    >
                      upload
                    </Button>
                  </ExpansionPanelActions>
                </ExpansionPanel>
              );
            })}
          </ul>
        );
      } else {
        return (
          <ul>
            {this.state.reports.map((data, key) => {
              console.log(data);
              return (
                <ExpansionPanel key={key}>
                  <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                    <div>
                      <Typography>{data.Bname}</Typography>
                    </div>
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails>
                    <div />
                    <div>
                      <Typography>
                        BOOK NAME:{data.Bname}
                        <br />
                        AUTHOR NAME:{data.Aname}
                      </Typography>
                      <br />
                    </div>
                  </ExpansionPanelDetails>
                  <AudioPlayer
                    src={data.url}
                    onPlay={e => console.log("onPlay")}
                  />
                  <Divider />
                  <ExpansionPanelActions>
                    <Button
                      size="small"
                      onClick={() => this.handlecancel("reports", data.id)}
                    >
                      remove
                    </Button>
                    <Button
                      size="small"
                      color="primary"
                      onClick={() => this.handlesave(key, "reports", data.id)}
                    >
                      keep
                    </Button>
                  </ExpansionPanelActions>
                </ExpansionPanel>
              );
            })}
          </ul>
        );
      }
    }
  }
}
