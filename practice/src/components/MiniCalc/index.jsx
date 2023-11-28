import React, { useState } from 'react'

const MiniCalc = () => {

    const [first, setFirst] = useState("")
    const [second, setSecond] = useState("")
    const [result, setResult] = useState("")
    function sum() {
      let number1=parseFloat(first)
      let number2=parseFloat(second)
       setResult(parseInt(first)+parseInt(second))
       if(isNaN(number1) || isNaN(number2)){
         setResult("reqem daxil edin")
      }
         
      }
      function substract() {
         let number1=parseFloat(first)
         let number2=parseFloat(second)
         setResult(parseInt(first)-parseInt(second))
         if(isNaN(number1) || isNaN(number2)){
            setResult("reqem daxil edin")
         }
        }
    function divide() {
      let number1=parseFloat(first)
      let number2=parseFloat(second)
         setResult(parseInt(first)/parseInt(second))
         if(number2===0){
         setResult("0 bolmek olamz")
      }
      if(isNaN(number1) || isNaN(number2)){
        setResult("reqem daxil edin")
     }
        }   
        function multiply() {
         let number1=parseFloat(first)
         let number2=parseFloat(second)
             setResult(number1*number2)
         if(isNaN(number1) || isNaN(number2)){
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