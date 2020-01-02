import React, { useState, useEffect  } from 'react';

const Tracker=(props)=>{
    console.log("tracker rendered")

    // more logic here and assign state/variables
    return(
        <section>
            <p>This is the tracker component</p>
            <p>Count is: {props.count}</p>
            <button onClick={()=>props.setCount(props.count+1)} >Tracker count increase</button>
        </section>
    )
}

export default Tracker;