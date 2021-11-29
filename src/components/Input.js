import React,{useState,useContext} from "react"
import Button from "./Button";
import {TodoContext} from "../contexts/TodoContextProvider";

const Input = ({title}) => {
    const {addHandler} = useContext(TodoContext)

    const [value , setValue] = useState(``)

    return (
        <div className={`input-container col-12 d-flex align-items-center`}>
            <div className={`col-lg-9 d-flex flex-column`}>
                <input value={value} type="text" placeholder={title} onChange={(e)=> setValue(e.target.value)}/>
            </div>
            <div className={`col-lg-3`}>
                <Button clickHandler={()=>addHandler(value)} text={`add`}/>
            </div>
        </div>
    )
}

export default Input