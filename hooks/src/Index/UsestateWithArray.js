import React,{useState} from 'react'

function UsestateWithArray() {
    const [items,setItems]=useState([])
    const AddItem=()=>{
        setItems([ ...items,{
            id:items.length,
            value:Math.floor(Math.random() * 10 ) + 1
        }])
    }
    return (
        <div>
            <button onClick={AddItem}><h3>Add a Number</h3></button>
            <ol>
                {items.map(item=>(
                    <li key={item.id}>{item.value}</li>
                ))}
            </ol>
        </div>
    )
}
export default UsestateWithArray