import React,{useState} from 'react'

function Usestate() {
    const [count,setCount]=useState(0)
    return (
        <div>
            <button onClick={()=>setCount(prevCount=>prevCount+1)}>count-{count}</button>
        </div>
    )
}
export default Usestate