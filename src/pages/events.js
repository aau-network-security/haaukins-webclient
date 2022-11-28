import React, { Component } from "react";
import Header from "../components/Header"
 
class Events extends Component {
  render() {
    return (
      <div>
        <Header className="Header"/>
        <h2>GOT QUESTIONS?</h2>
        <p>The easiest thing to do is post on
        our <a href="http://forum.kirupa.com">forums</a>.
        </p>
      </div>
    );
  }
}
 
export default Events;