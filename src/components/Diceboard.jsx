import React, { useEffect, useState } from "react"
import Boardline from "./Boardline";
import Decision from "./Decision";
import Dice from "./Dice";
import Playerinfo from "./Playerinfo";
import Timer from "./Timer";

function Diceboard()
{
    var[help,updatehelp]=useState(5);
    const[n,updaten]=useState(0);
    const[no,updateno]=useState([6,6,6])
    const[fnplyr,updatefnplyr]=useState({
        p1:0,
        p2:0,
        turn:true
    })
    const[player,updateplayer]=useState({
        p1:0,
        p2:0,
        turn:true      //True mtlb p1 ki turn and false mtlb player 2 ki turn
    });

    function handleClick()
    {
        let na=(Math.floor((Math.random() * 6) + 1));
        let nb=(Math.floor((Math.random() * 6) + 1));
        let nc=(Math.floor((Math.random() * 6) + 1));
        updateno([na,nb,nc]);

        let arr=[na,nb,nc];
        // console.log(arr);        
        let tp1=player.p1;
        let tp2=player.p2;
        let tturn=player.turn;
        let specialCase=(tturn==true?tp1:tp2);
        let ans=0;
        let temp;

        switch (arr[1]) {
            case 1:
                ans=arr[0]+arr[2];  
                break;
            case 2:
                temp=arr[0]*arr[2];
                if(temp%2===0) ans=temp/2;
                else if(temp%3===0) ans=temp/3;
                else ans=temp/5;  
                break;
            case 3:
                ans=(arr[0]>arr[2]?(arr[0]%arr[2]==0?(arr[0]/arr[2]):1):(arr[2]%arr[0]==0?(arr[2]/arr[0]):1));
                break;
            case 4:
                if(specialCase%2===0)
                ans=(arr[0]+arr[2])*2; 
                else
                {
                    ans=0;
                }
                break;
            case 5:
                if(specialCase%2!==0)
                ans=(Math.abs(arr[0]-arr[2]))*2;
                
                else{
                    ans=0;
                }
                break;
            case 6:
                ans=Math.abs(arr[0]-arr[2]);  
                break;
                default:
                    ans=0;
                    break;
                }
                
                if(tturn===true)
                {
                    tp1=tp1+ans;
                    tturn=false;
                }
                else
                {
                    tp2=tp2+ans;
                    tturn=true;
                }   
                
                
                
                updateplayer({
                    p1:tp1,
                    p2:tp2,
                    turn:tturn
                });
                
                let primeNumber=[2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];
                let primeCheck=(tturn==false?tp1:tp2);
                let prevNo=2;
                let check=0;
                let predictedNo=0;
                primeNumber.forEach(e=>{
                    if(e==primeCheck)
            {
                primeCheck=prevNo;
                check=1;
                predictedNo=e;
            }
            prevNo=e;
        })

        if(check===1)
        {
            if(tturn===false)
            {
              tp1=primeCheck;
            }
            else
            {
               tp2=primeCheck;
            }   
            
            updateplayer({
                p1:tp1,
                p2:tp2,
                turn:tturn
            });

            
        }
        if(help==5)
        updatehelp(4)
        else if(help==4)
        updatehelp(5)
        updaten(n+1);
    }
    function updfinal()
    {
        updatefnplyr(player);
    }
    
    useEffect(()=>{
        const timeout = setTimeout(() => {
            updfinal();
          }, 5000);
      
         return () => clearTimeout(timeout);
    },[n]);

    return <div>
    <div className="DiceBoard">
    <Boardline board={fnplyr} n={n} />
    <Dice no={no[0]} name="small"/>
    <Dice no={no[1]} name="big"/>
    <Dice no={no[2]} name="small"/>
    <button className="Btnroll" onClick={handleClick}>Roll</button>
    <Playerinfo info={player} />
    </div>
    <div className="Decisions">
    <Decision deciNo={no[1]}/>
    </div>
    <Timer n={help}/>
    </div>
}

export default Diceboard;