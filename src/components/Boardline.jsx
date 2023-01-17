import React, { useEffect, useState } from "react"


function Boardline(props){
    let pre=[0,10,20,30,40,50,60,70,80,90];
    let post=[1,2,3,4,5,6,7,8,9,10];
  
    
    const {p1,p2}=props.board;
    console.log(p1,p2,"---")

    // useEffect(()=>{
    //     const timeout = setTimeout(() => {
    //         // console.log("alert--")
    //       }, 2000);
      
    //      return () => clearTimeout(timeout);
    // },[n]);

    return (<div>
            {pre.map(preNo=>{
                return <div className="Row">
                {post.map(postNo=>{
        return <div 
        // onClick={clickedBox} 
        className={((preNo+postNo)==p1) && ((preNo+postNo)==p2)?"Boxx mix":(preNo+postNo)==p1?"Boxx Bp1":(preNo+postNo)==p2?"Boxx Bp2":"Boxx"}>{preNo+postNo}</div>}
             )}
                </div>
            })}
        </div>)
}

export default Boardline;