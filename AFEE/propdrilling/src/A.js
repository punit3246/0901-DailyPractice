import React, { createContext } from 'react';
import B from './B';

const cd=createContext();
function A(props) {
    return (
        <div>
            <cd.Provider value={"Ram Kumar JI"}>
            <B  />
            </cd.Provider>
        </div>
    );
}

export default A;
export {cd};