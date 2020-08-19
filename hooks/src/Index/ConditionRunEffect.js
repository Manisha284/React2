import React,{useState,useEffect} from 'react'

function ConditionRunEffect() {
    const [count,setCount]=useState(0)
    const [name,setName]=useState('')
    useEffect(()=>{
        console.log('updating')
    },[count])
    return (
        <div>
            <input type="text" value={name} onChange={e=>setName(e.target.value)}/>

            <button onClick={()=>setCount(
                  prevCount=>prevCount+1
            )}>submited {count} members</button>
        </div>
    )
}
export default ConditionRunEffect