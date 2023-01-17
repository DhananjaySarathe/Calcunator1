import React from "react";

function Playerinfo(props)
{

    return(
    <div className="infoRow playerInfo">
    <div className="playerInfo">
    <h1 className={props.info.turn==true?"playerInfo Bp1":"playerInfo"}>Player-1: {props.info.p1} </h1>
    <h1 className={props.info.turn==false?"playerInfo Bp2":"playerInfo"}>Player-2: {props.info.p2} </h1>
    </div>

    </div>
    )
};

export default Playerinfo;