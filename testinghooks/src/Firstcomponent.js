
import React, { useState, useEffect } from 'react';


export default(props)=>{

    // initialize state with count set to 0, also get update function
    const [count, setCount] = useState(0);

    // similar to component did update/mount
    useEffect(() => {
        let counterElem = document.querySelector("h1");
        counterElem.textContent = `Current count: ${count}`;
        
        //document.title=`The counter is currently ${count}`
    });
    
    return(
        <div>
        <p>Current count is { count }</p>
        <div>
            <button onClick={()=>setCount(count+1)} >increase count</button>
        </div>

        </div>
        
    )
}