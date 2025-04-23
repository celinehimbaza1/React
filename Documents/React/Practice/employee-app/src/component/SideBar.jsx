import React from "react";
export default function SideBar(){
    return(
        <div>
           <div className="h-screen w-64 bg-gray-100 flex flex-col p-4"> 
{/* sidebar */}
<div className="flex">
<div className="mb-4">
<img src="/img/adminProfile.png" alt="admin photo" className="w-20 h-20 rounded-full"/>
</div>
<div className="ml-4">
<h1 className="text-xl font-semibold">Dashboard</h1>
</div>
</div>

    <nav>
        <ul className="space-y-4 text-left">
            <li>Dashboard</li>
            <li>Employee</li>
            <li>Payment</li>
            <li>Leave Request</li>
            <li>Report</li>
            <li>User</li>
            <li>Setting</li>
        </ul>
    </nav>
           </div>
            

        </div>
    )
}