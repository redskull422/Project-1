import React,{useState} from 'react'

const Increment=(props)=>{
    const[afzayesh, setAfzayesh]=useState(0)
    const handleClick=()=>{
        setAfzayesh (afzayesh + props.incrementBy)
    }
    const handleClick2=()=>{
        setAfzayesh(afzayesh - props.notIncrementBy)
    }
    return(
        <div className="flex justify-center">
            <div className="rounded-lg shadow-lg">
                 <button className="bg-red-500 w-screen" onClick={handleClick}>+</button>
                 <div className="bg-red-200 w-screen">{afzayesh}</div>
                 <button className="bg-red-500 w-screen" onClick={handleClick2}>-</button>
            </div>
        </div>
    )
}
export default Increment