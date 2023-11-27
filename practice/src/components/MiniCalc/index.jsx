import React, { useState } from 'react'

const MiniCalc = () => {
    const [first, setFirst] = useState("")
    const [second, setSecond] = useState("")
    const [result, setResult] = useState("")
    function sum() {
        setResult(parseInt(first)+parseInt(second))
     if(typeof(setResult)!==Number ){
        setResult("reqem daxil edin")
     }

    }
    function substract() {
         setResult(parseInt(first)-parseInt(second))
         if(typeof(setResult)!==Number ){
            setResult("reqem daxil edin")
         }
        }
    function divide() {
         setResult(parseInt(first)/parseInt(second))
         if(typeof(setResult)!==Number ){
            setResult("reqem daxil edin")
         }
        }   
        function multiply() {
             setResult(parseInt(first)*parseInt(second))
             if(typeof(setResult)!==Number ){
                setResult("reqem daxil edin")
             }
            }  
  return (
    <div>
        <input type="text" value={first} onChange={e=>setFirst(e.target.value)}/>
        <input type="text" value={second} onChange={e=>setSecond(e.target.value)}/>
        <button onClick={sum}>+</button>
        <button onClick={substract}>-</button>
        <button onClick={divide}>/</button>
        <button onClick={multiply}>*</button>
        <h1>{result}</h1>
    </div>
  )
}

export default MiniCalc