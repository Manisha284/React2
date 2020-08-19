import React,{useState} from 'react'

function UsestateWithPrevstate() {
    const initialvalue=0
    const [count,setCount]=useState(initialvalue)

    return (
        <div>
            <h2>count-{count}</h2>
            <div>
            <button onClick={()=>setCount(initialvalue)}>Reset</button>
            </div>

            <div>
                <button onClick={()=>setCount(prevCount=>prevCount+1)}>Increment</button>
            </div>

            <div>
                <button onClick={()=>setCount(prevCount=>prevCount-1)}>Decrement</button>
            </div>


            <div>
                <button onClick={()=>setCount(prevCount=>prevCount+5)}>Increment By 5</button>
            </div>
            
        </div>
    )
}
export default UsestateWithPrevstate