 import React, {Component} from "react";
 import {Link} from "react-router-dom";
 class Registration extends Component {
  constructor(){
      super();
      this.state={
        name: "",
        email: "",
        password: "",
        error: "",
        open: false
      };
  }
  handleChange = (type) => event => {
    this.setState({error:""});
    this.setState({[type]:event.target.value});
};

clickSubmit = (event) => {
    event.preventDefault();
    const {name,email,password} = this.state;
    const user = {
        name,
        email,
        password
    };
    console.log("User",user);
 this.registration(user);
};

registration = (user) => {
 return fetch("http://localhost:3050/registration",{
        method: "POST",
        headers:{
            "Content-Type": "application/json",
            Accept: "application/json"
        },
        body: JSON.stringify(user)
    })
    .then((response) => { 
        return response.json();
    })
    .then((data) => {
        if (data.error) this.setState({error: data.error});
        else 
        this.setState({
        error: "",
        name: "",
        email: "",
        password: "",
        open: true
        });
    })
    .catch ((error) => {
        console.log(error)
    });
}

registrationForm = (name,email,password) => (
    <form>
    <div className="form-group">
    <label className="text-muted">Name</label>
        <input onChange={this.handleChange("name")} type="text" className="form-control"
        value={name} />
    </div>
    <div className="form-group">
        <label className="text-muted">Email</label>
        <input onChange={this.handleChange("email")} type="email" className="form-control" 
        value={email}/>
    </div>
    <div className="form-group">
        <label className="text-muted">Password</label>
        <input onChange={this.handleChange("password")} type="password" className="form-control"
         value={password}/>
    </div>
    <button onClick = {this.clickSubmit} className="btn btn-raised btn-primary">
        Submit
    </button>
   </form>
)

render(){
    const {name,email,password,error,open} = this.state;
    return (
        <div className="container">
       <h2 className="mt-5 mb-5">Register</h2>

       <div className="alert alert-danger" style={{ display : error ? "" : "none"}}> 
        {error}
       </div>
       <div className="alert atert-info" style={{ display : open ? "" : "none"}}>
       New account is successfully created. Please {" "}
       <Link to="/login">Log In
       </Link>
       </div>
      {this.registrationForm(name,email,password)}
        </div>
    );
}
}

 export default Registration;