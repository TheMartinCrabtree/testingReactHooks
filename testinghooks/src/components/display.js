import React, { useState, useEffect } from 'react';

const Display=(props)=>{
    console.log("display rendered")

    // more logic here and assign state/variables
    return(
        <div>
            <p>This is the display component</p>
            <p>Disp Var: {props.dispVar} </p>
        </div>
    )

}

export default Display;