import React from 'react';
import "./App.css";
import Home from './Home';
import Test from './Test';

import "bootstrap/dist/css/bootstrap.min.css";
const App=()=>{
    return(
        <div className="App">
            <h1>Hello World</h1>
            <h2>This is heading two</h2>
            <Home/>
            <Test/>
        </div>
    );
}

export default App;