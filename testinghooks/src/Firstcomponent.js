
import React, { useState, useEffect, useMemo } from 'react';
import Tracker from './components/tracker';
import Display from './components/display';


export default(props)=>{
    console.log("first component rendered");


    // initialize state with count set to 0, also get update function
    const [count, setCount] = useState(0);

    // similar to component did update/mount
    useEffect(() => {
        let counterElem = document.querySelector("h1");
        counterElem.textContent = `Current count: ${count}`;
        
        //document.title=`The counter is currently ${count}`
    });

    // testing useMemo to only render display if there is a change
    const displaymemo = useMemo(() => {return <Display />}, [])
    
    return(
        <div>
            <p>Current count is { count }</p>
            <div>
                <button onClick={()=>setCount(count+1)} >increase count</button>
            </div>
            <Tracker count={count} setCount={setCount} />
            {displaymemo}

        </div>
        
    )
}