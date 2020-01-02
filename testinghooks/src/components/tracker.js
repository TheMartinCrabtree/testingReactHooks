import React, { useState, useEffect  } from 'react';

export default(props)=>{
    // more logic here and assign state/variables
    return(
        <section>
            <p>This is the tracker component</p>
            <p>Count is: {props.count}</p>
            <button onClick={()=>props.setCount(props.count+1)} >Tracker count increase</button>
        </section>
    )
}