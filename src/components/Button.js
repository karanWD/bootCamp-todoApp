import React from "react"

const Button = ({clickHandler,text}) =>{
    return(
        <button className={`col-lg-12 `} onClick={clickHandler}>
            {text}
        </button>
    )
}

export default Button