import React from 'react'
import Userdata from './Userdata.json';
const Apidata = () => {
  return (
    <div>
        <h1>This is a data component.</h1>
        <table className="table">
            <thead>
                <tr>
                    <th>Index</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Mobile No</th>
                    <th>Address</th>
                </tr>
            </thead>
            <tbody>
                {
                    Userdata.map((users,index)=>(
                        <tr key={index}>
                            <th>{index+1}</th>
                            <td>{users.Name}</td>
                            <td>{users.Email}</td>
                            <td>{users.Mobile}</td>
                            <td>{users.Address}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </div>
  )
}

export default Apidata;
