import React from "react";
import { HomeIcon,UserGroupIcon,CreditCardIcon,CalendarDaysIcon,DocumentChartBarIcon,UserIcon,CogIcon } from "@heroicons/react/24/outline";
export default function SideBar(){
    return(
        <div className="flex">
           <div className="h-screen w-64 bg-slate-700 flex flex-col p-12 text-white"> 
{/* sidebar */}
<div className="flex">
<div className="mb-10">
<img src="/img/adminProfile.png" alt="admin photo" className="w-20 h-20 rounded-full"/>
</div>
{/* <div className="ml-5">
<h1 className="text-xl font-semibold">Dashboard</h1>
</div> */}
</div>

    <nav>
        <ul className="space-y-6 text-left text-xl font-semibold ">
        <li className="flex space-x-2 text-white hover:bg-blue-400 rounded-md">  <HomeIcon className="w-5 h-5 text-white m-1" /> 
            <span>Dashboard</span> </li>
            <li className="flex space-x-2 text-white hover:bg-blue-400 rounded-md"> <UserGroupIcon className="w-5 h-5 text-white m-1" />
            <span>Employee</span></li>
            <li className="flex space-x-2 text-white hover:bg-blue-400 rounded-md">  <CreditCardIcon className="w-5 h-5 text-white m-1" />
            <span>Payment</span></li>
            <li className="flex space-x-2 text-white hover:bg-blue-400 rounded-md"><CalendarDaysIcon className="w-4 h-5 text-white ml-1 mt-1" />
            <span>LeaveRequest</span></li>
            <li className="flex space-x-2 text-white hover:bg-blue-400 rounded-md"><DocumentChartBarIcon className="w-5 h-5 text-white m-1" />
            <span>Report</span></li>
            <li className="flex space-x-2 text-white hover:bg-blue-400 rounded-md"><UserIcon className="w-5 h-5 text-white m-1" />
            <span>User</span></li>
            <li className="flex space-x-2 text-white hover:bg-blue-400 rounded-md"><CogIcon className="w-5 h-5 text-white m-1" />
            <span>Settings</span></li>
            
        </ul>
    </nav>
           </div>
        
        </div>
    )
}

