import React from 'react'
import Navbar from './Navbar.js';
const Login = () => {
  return (
    <div>
        {/* <form>
       <div className="input-container">
         <label>Username </label>
         <input type="text" name="uname" required />
         {renderErrorMessage("uname")}
       </div>
       <div className="input-container">
         <label>Password </label>
         <input type="password" name="pass" required />
         {renderErrorMessage("pass")}
       </div>
       <div className="button-container">
         <input type="submit" />
       </div>
     </form> */}
        <Navbar/>
    </div>
  )
}

export default Login;