import React, {useState,useEffect} from "react";

export default function Calculator(){
    const [firstNumber,setFirstNumber]= useState();
    const [secondNumber,setSecondNumber]= useState();

return(
    <div>
<h1>Calculator</h1>
<div className="flex justify-center items-center  py-6 ">
    <div>
    <form action="" className="flex flex-col justify-center px-24">
        <input type="text" value={firstNumber}  placeholder="Enter Fist Number" name="firstNumber" className="mt-4"/> 
        <input type="text" value={secondNumber} placeholder="Enter Second Number" name="secondNumber" className="mt-4"/>

    </form>
    </div>
    <div>
        <select name="" id="">
            <option value="">Select Operator</option>
            <option value="addition">Addition (+)</option>
            <option value="Substrac">Substract (-)</option>
            <option value="Multipy">Multipy (*)</option>
            <option value="Divide">Divide(÷)</option>
        </select>
    </div>
</div>

    </div>
)

}