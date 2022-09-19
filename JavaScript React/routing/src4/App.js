import React from 'react';
//import "./App.css";
// import Home from './Home';
// import Test from './Test';
import Form from './Form';
import Form_three from './Form_three';

import "bootstrap/dist/css/bootstrap.min.css";
const App=()=>{
    return(
        <div className="App">
            <h1>Hello World</h1>
            <h2>This is heading two</h2>
            {/* <Home/>
            <Test/> */}
            <Form/>
            <Form_three/>
        </div>
    );
}

export default App;