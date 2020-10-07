import React,{Component} from "react";
import {isAuthenticated} from "../auth";

class Profile extends Component {
    constructor(){
    super();
    this.state={
        user: ""
    };
}

componentDidMount()  {

    fetch('http://localhost:3050/user/:userId"')
    .then(res => res.json())
    .then((result) => {
        this.setState({ user: result })
    })
     }


render(){

return(
    <div className="container">
     <h2 className="mt-5 mb-5">Profile</h2>
<p>Hello {isAuthenticated().user.name}</p>
<p>Email: {isAuthenticated().user.email}</p>
    </div>
);


}
}

export default Profile;