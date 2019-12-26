
import React, { useState } from 'react';


export default(props)=>{

    const [count, setCount] = useState(0);
    
    return(
        <div>
        <p>Current count is { count }</p>
        <div>
            <button >increase count</button>
        </div>

        </div>
        
    )
}