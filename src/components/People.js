import React, { Component } from "react";
import { Link } from "react-router-dom";

// Forgot password
class People extends Component {
  render() {
    return (
      <div className="App">
        <p>hi from People</p>
        <Link to="/forms">Form</Link>
        <br />
        <Link to="/">Home</Link>
        <br />
        <form>
          Forgot Password?
          <br/>
          <input type="text" name="Pwd Forgot" />
          <br/>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default People;
