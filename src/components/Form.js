import React, { Component } from "react";
import { Link } from "react-router-dom";
import { stringify } from "querystring";
// Register for the first time
const url = '' //add in URL

class Form extends Component {
  state = {
    firstname: "",
    lastname: "",
    email: "",
  }
  
  
handleSubmit=(e) => {
e.preventDefault()
// Place the Prevent after handleSubmit
const data = JSON.stringify(...this.state)
fetch(url,{
method: "post",
body: data,
headers:{}
})

}


  render() {
    console.log(this)
    console.log(this.state)
    return (
      <div className="App">
        <p>hi from Form</p>
        <Link to="/">Home</Link>
        <br />
        <Link to="/people">People</Link>
        <br />
        <form onSubmit={this.handleSubmit}>
          <h2>Register</h2>
          First name:
          <br />
          <input type="text" name="fname" 
          onChange={e => this.setState({first: e.target.value})}/>
          <br />
          Last name:
          <br />
          <input type="text" name="lname" 
          onChange={e => this.setState({last: e.target.value})}/>
          <br />
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <br/>
            <input
              type="email"
              // className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              onChange={e => this.setState({email: e.target.value})}
            />
           
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <br/>
            <input
              type="password"
              // class="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
            />
          </div>
          <div class="form-group form-check">
            <input
              type="checkbox"
              class="form-check-input"
              id="exampleCheck1"
            />
          
          </div>
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default Form;
