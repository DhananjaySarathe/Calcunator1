import React, { useState } from "react"

function Dice(props)
{
    let path="files/dice"+props.no+".png";

    return <div className="dice">
    <img className={props.name} src={path}  alt="img"/>
    </div>
}

export default Dice;