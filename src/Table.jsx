import React from "react";
import Tdata from './Tdata.jsx'

function Thead() {
  return (
    <tr 
      className="bg-gray-100 font-light text-xs leading-5 text-gray-600 "
      >
      <th 
        className=" flex text-start border-t-2 px-6 py-3 ">
          <label>
          <input type="checkbox" />
        </label>
        <div className="ms-3 ">
          <span>Name</span>
        <i className="ms-1 fa-solid fa-arrow-down"></i>
        </div>
        
      </th>
      <th 
        className="text-start border-t-2 px-6 py-3"
        >Status</th>
      <th 
        className="text-start border-t-2 px-6 py-3  "
        >Email</th>
      <th 
        className="text-start border-t-2 px-6 py-3  "
        >Role</th>
      <th 
        className="w-auto text-start border-t-2 px-6 py-3  "
        >Rating</th>
      <th className="text-start border-t-2 px-6 py-3"></th>
    </tr>
  )
}

function Tbody( {users, setUser, records} ) {
  return (
    <Tdata users={users} setUser={setUser} records={records} />
  )
}







export default function Table({users, setUser, records}) {
  return (
    <div className="overflow-x-auto ">
      <table className="mt-5 w-full border-collapse bg-white whitespace-nowrap ">
    <Thead />
     <Tbody users={users} setUser={setUser} records={records}  />
   </table>
    </div>
   
  )
}