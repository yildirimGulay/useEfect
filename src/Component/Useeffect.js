import React, { useState ,useEffect } from 'react'

 const Useeffect = () => {

    const [randomNumber, setRandomNumber] = useState(0);
    const [effectLogs, setEffectLogs]=useState([]);

    useEffect(() => {
        setEffectLogs(prevEffectLogs=> [...prevEffectLogs, 'effect aded'])

        },[randomNumber]) 


    return (
        <div>
        <h1>{randomNumber}</h1>

        <button 
        onClick= {()=>{setRandomNumber(Math.random())}}
        > Random number</button>

        <button className="reset" onClick={()=>{setEffectLogs([]) || setRandomNumber(0)}}>Reset</button>

        <div>
            {effectLogs.map((effect,index)=>(<div key={index}>{':))'.repeat(index)+effect}</div>))}
        </div>

        </div>
    )
}

export  default Useeffect
