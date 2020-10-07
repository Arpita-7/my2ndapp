import React, {Component} from "react";
import DefaultProfile from "../images/avatar.jpeg";

class Users extends Component {

    constructor(){
        super()
        this.state = {
        users : []

        }
    }

    componentDidMount()  {

        fetch('http://localhost:3050/users')
        .then(res => res.json())
        .then((result) => {
            this.setState({ users: result })
        })
         }

    renderUsers = (users) => (
        <div className="row">
            {users.map((user,i)=> (
                <div className="card col-md-4"  key={i}>
                    <img style ={{height: "200px", width: "auto"}}
                className="img-thumbnail"
                src={DefaultProfile} 
                alt={user.name}/>
                <div className="card-body">
                  <h5 className="card-title">{user.name}</h5>
                  <p className="card-text">{user.email}</p>

                </div>
              </div>
            
          ))}
            </div>
    );




    render(){
        const {users} = this.state;
        return(
            <div className="container">
            <h2 className="mt-5 mb-5">Users</h2>
            {this.renderUsers(users)}
            </div>
        );
    }
}

export default Users;