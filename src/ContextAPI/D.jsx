import React from 'react';
import { useContext } from 'react';
import myContext from './Context';

function D(props) {
    const data =useContext(myContext);

    return (
        <div>
            <h2>D Comp</h2>
            <p style={{color:"red"}}>{data} </p>
            <hr/>
        </div>
    );
}

export default D;