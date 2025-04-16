import { useState } from "react";
import React from "react";

export function Poem(){
    const [firstName,setFirstName]= useState('');
    const [lastName,setLastName]= useState('');
    const [address, setAddress]= useState('');
    const [favColor, setFavColor]= useState('');
    const [hobby, setHobby]= useState('');
    const [petName, setPetName]= useState('');
    const [isSubmitted, setIsSubmitted]= useState(false);


 const handleSubmit = (e)  => {
    e.preventDefault();
    if(!firstName || !lastName || !petName || !address || !favColor || !hobby ){
        alert('Please fill the form fields');
        setIsSubmitted(false)
    }
    else{
        console.log('Form Submitted');
        setIsSubmitted(true)
    }
 }  
const renderPoem= () => {
    if (!isSubmitted){
        return  <em>Fill in the Form to reveal poem...</em>;
    }
    return (
        <div>
            <p>In the land of {address} where the sky is {favColor},</p>
           <p>Lived {firstName} {lastName}, who loved {hobby} so much.</p>
           <p>With their pet {petName} always nearby, They laughed and played as the sun went down</p>
        </div>
    );
};



    return(
        <div>
            <div>
            <h3 className="text-xl">Your Poem</h3>
            <div>{renderPoem()}</div>
        </div>
            <form action="submit" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-4">
                <input type="text" value={firstName} placeholder="First Name" name="firstName" onChange={(e) => setFirstName(e.target.value)} className="p-2 border rounded-xl" />
                <input type="text" value={lastName} placeholder="Last Name" name="lastName"    onChange={(e) => setLastName(e.target.value)} className="p-2 border rounded-xl"/>
                <input type="text" value={address} placeholder="Address"  name="address"  onChange={(e) => setAddress(e.target.value)} className="p-2 border rounded-xl"/>
                <input type="text" value={petName} placeholder="Pet Name"  name="petName"  onChange={(e) => setPetName(e.target.value)} className="p-2 border rounded-xl"/>
                <input type="text" value={hobby} placeholder="Hobby"  name="hobby"  onChange={(e) => setHobby(e.target.value)} className="p-2 border rounded-xl"/>
                <input type="text" value={favColor} placeholder="Favorite Color"  name="favColor"  onChange={(e) => setFavColor(e.target.value)} className="p-2 border rounded-xl"/>
            </div>
            <button type="">Submit</button>
            </form>
        </div>
    )
}