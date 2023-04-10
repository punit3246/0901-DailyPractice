import React, { useContext } from 'react';
import {cd} from './A';


function D(props) {
   const u= useContext(cd);
    return (
        <div>
        <h1>  {u}  </h1>
        </div>
    );
}

export default D;