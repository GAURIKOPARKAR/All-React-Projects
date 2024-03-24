import { useState,useMemo } from "react";
import "./App.css";

const App = () => {
  const [Num1, setNum1] = useState(0)
  const [Num2, setNum2] = useState(0)
  const [sign, setsign] = useState("")
  const [place, setplace] = useState("")

  const handleNumber = (e)=>{ 
    // console.log(e.target.value)
    let Num = parseInt(e.target.value)
    console.log("Num1 = " + Num1)
    console.log("Num2 = " + Num2)
    setplace(place+" "+Num)
     Num1 >0 ? setNum2(Num):setNum1(Num)
  }

  const handlesign = (sign)=>{
    setsign(sign)
    setplace(place+" "+sign)

  }

  const calculate = () =>{
    let result;
    if(sign==="+")result=(Num1+Num2)
    if(sign==="-")result=(Num1-Num2)
    if(sign==="*")result=(Num1*Num2)
    if(sign==="/")result=(Num1/Num2)
    setplace(result)
  setNum1(result)
  }
 
  return (
    <>
      <div className="flex justify-center items-center h-screen bg-slate-400">
        <div className="h-[60vh] w-[50vw] bg-yellow-100 ">
          <input
            type="Number" placeholder={place}
            className="h-[20%] w-[90%] m-4 p-4 border-black rounded-xl"
          />
          <div className="flex justify-center items-center">
          <div>
            <button onClick={handleNumber} value={9} className="custom-button">9</button>
            <button onClick={handleNumber} value={8} className="custom-button">8</button>
            <button onClick={handleNumber} value={7} className="custom-button">7</button>
            <button onClick={handleNumber} value={6} className="custom-button">6</button>
            <button onClick={handleNumber} value={5} className="custom-button">5</button>
            <button onClick={handleNumber} value={4} className="custom-button">4</button>
            <button onClick={handleNumber} value={3} className="custom-button">3</button>
            <button onClick={handleNumber} value={2} className="custom-button">2</button>
            <button onClick={handleNumber} value={1} className="custom-button">1</button>
          </div>

          <div>
            
            <button onClick={()=>handlesign("+")} className="custom-button">+</button>
            <button onClick={()=>handlesign("-")} className="custom-button">-</button>
            <button onClick={()=>handlesign("*")} className="custom-button">*</button>
            <button onClick={()=>handlesign("/")} className="custom-button">/</button>
            <button onClick={handleNumber} value={0} className="custom-button">0</button>
            <button onClick={calculate} className="custom-button hover:w-[7rem]">Calculate</button>
          </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default App;
