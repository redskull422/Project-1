import React,{useState} from "react"
import "./SearchBar.css"
const SearchBar=()=>{
    const[SearchValue, setSearchValue]=useState("....حستجو") 
    const handleChange=(event)=>{
        setSearchValue(event.target.value)
    }
    const handleClick=()=>{
        setSearchValue("")
    }
    const shouldDisplayButton = SearchValue.length>0;
    return(
        <div>
            {shouldDisplayButton && <button onClick={handleClick} className="font-bold text-sm m-1 ">x</button>}
            <input className="font-thin text-sm items-start opacity-75 w-40 text-black rounded-lg text-right"type="text" value={SearchValue} onChange={handleChange}></input>
        </div>
    )
}
export default SearchBar