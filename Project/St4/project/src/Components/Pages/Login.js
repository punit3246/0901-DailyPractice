import React from 'react';


import {Link} from "react-router-dom";
export default function Login() {
  return (
    <div>
        <div style={{display:"flex"}}>
            <div  id='LoginDiv'>
                <from  id="form">
                    <h1 >Login</h1>
                    
                    <table id="table">
                        <tr>
                            <td colSpan="2" ><input class="form-control" type="email"id="loginE" name="email"required placeholder='Enter the Email'/></td>
                        </tr>
                        <tr>
                            <td colSpan="2"  ><input class="form-control"type="password"id="loginP"  name="password"required placeholder='Enter the Password' /></td>
                        </tr>
                       
                        <tr>
                            <td colSpan="2" >
                                <Link className="btn btn-outline-success" to="/home">Login</Link>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="2">
                                Don't have account ? <Link to="/register" id='link'><b>Register</b></Link>
                            </td>
                        </tr>
                    </table>
                    
                 </from>
              
            </div>
        </div>
    </div>
  )
}
