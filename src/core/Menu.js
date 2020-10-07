import React from "react";
import {Link,withRouter} from "react-router-dom";
import {logout,isAuthenticated} from "../auth";

const isActive = (history,path) => {
    if (history.location.pathname === path) return {color: "#ff9900"}
    else return {color: "#ffffff"}
};


const Menu = ({history}) => (
<div>
<ul className="nav nav-tabs bg-primary">
  <li className="nav-item">
  <Link className="nav-link" to="/" style={isActive(history,"/")}>Dashboard</Link>
  </li>
  <li className="nav-item">
  <Link className="nav-link" to="/users" style={isActive(history,"/users")}>Users</Link>
  </li>
 {!isAuthenticated() && (
     <>
      <li className="nav-item">
      <Link className="nav-link" to="/login" style={isActive(history,"/login")}>Log In</Link>
      </li>
      <li className="nav-item">
      <Link className="nav-link" to="/registration" style={isActive(history,"/registration")}>Register</Link>
      </li>
      </>
 )}
 {isAuthenticated() && (
     <>
      <li className="nav-item">
      <span className="nav-link" style={(isActive(history,"/registration"),{ cursor:"pointer", color:"#fff" })
      }
      onClick={()=> logout(()=>history.push("/"))}
      >Log Out</span>
      </li>
       <li className="nav-item">
      
        <Link className="nav-link" to={`/user/${isAuthenticated().user._id}`}
        style={isActive(history,`/user/${isAuthenticated().user._id}`)}>
     {`${isAuthenticated().user.name}'s profile`}
     </Link>
    </li>
       </>
 )}
</ul>
</div>
);

export default withRouter (Menu);



