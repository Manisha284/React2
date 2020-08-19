import React,{useState} from 'react'

function UsestateWithObject1() {
    const [name,setName]=useState({firstname:'',lastname:''})
    return (
        <div>
            <input type="text" value={name.firstname} onChange={e=>setName({ ...name,firstname:e.target.value})}/>
            <input type="text" value={name.lastname} onChange={e=>setName({ ...name,lastname:e.target.value})}/>
            <h2>your firstname-{name.firstname}</h2>
            <h2>your lastname-{name.lastname}</h2>
            <button>submit</button>
        </div>
    )
}
export default UsestateWithObject1