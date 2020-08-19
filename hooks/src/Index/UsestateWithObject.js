import React,{useState} from 'react'


function UsestateWithObject() {
    const [name,setName]=useState({firstname: '',lastname: ''})
    return (
        <div>
            <div>
               <label>Firstname : </label>
               <input type="text" value={name.firstname} onChange={e=>setName({firstname:e.target.value})}/> 
            </div>

            <div>
               <label>Lastname : </label>
               <input type="text" value={name.lastname} onChange={e=>setName({lastname:e.target.value})}/>
            </div> 
            <div>
                <button onClick={()=>setName(alert('Thanks'))}>submit</button>
            </div>  
        </div>
    )
}
export default UsestateWithObject