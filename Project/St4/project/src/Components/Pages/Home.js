import React from 'react'
import { useState,useEffect } from 'react';
import axios from "axios";
import {Link,useNavigate} from "react-router-dom";
export default function Home() {
  let navigate=useNavigate();
  const [users,setUser]= useState([]);
  useEffect(()=>{
    loadUsers();
  },[]);
  const loadUsers=async ()=>{
    const result=await axios.get("http://localhost:4000/users");
    setUser(result.data);
  }
  const DeleteUser=async id=>{
     await axios.delete(`http://localhost:4000/users/${id}`);
     loadUsers();
  }
  
  return (
    <div id="HomeDiv">
      <h1 style={{textAlign:"center"}}>Employee Data</h1>
      <table class="table">
          <thead class="table-dark">
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>User Name</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              users.map((user,index)=>(
                <tr>
                  <th>{index+1}</th>
                  <td>{user.name}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>
                    <Link to={`/User/${user.id}`}><i className="fa fa-eye" style={{color:"black",fontSize:"25px",marginLeft:"5%"}} ></i></Link>
                    <Link to={`/EditUser/${user.id}`}><i className='far fa-edit' style={{color:"blue",fontSize:"25px",marginLeft:"5%"}}></i></Link>
                    <Link onClick={()=>DeleteUser(user.id)}><i className='fas fa-trash-alt' style={{color:"red",fontSize:"25px",marginLeft:"5%"}} ></i></Link>
                  </td>
                </tr>
              ))
            }
          </tbody>
      </table>
    </div>
  )
}
