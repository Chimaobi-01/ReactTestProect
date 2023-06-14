import React, { useState, useEffect } from "react";
import Tdata from './Tdata.jsx'
import {MockData} from "./MockData.jsx"




function Tbody({ records, toggleCheckbox }) {
  return (
    <Tdata  records={records}
      toggleCheckbox={toggleCheckbox}
      />
  )
}




export default function Table({
  toggleSelectAll, selectAll, records, toggleCheckbox
}) {


  return (
    <div className="overflow-x-auto ">
      <table className="mt-5 w-full border-collapse bg-white whitespace-nowrap ">

         <thead >
    <tr
      className="bg-gray-100 font-light text-xs leading-5 text-gray-600 "
    >
      <th
        className=" flex text-start border-t-2 px-6 py-3 ">
        <label>
          <input className="cursor-pointer text-blue-600 bg-gray-200 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
          type="checkbox"
          checked={selectAll}
          onChange={toggleSelectAll}
        />
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
      </thead>
        
        <Tbody
         records={records} 
          toggleCheckbox={toggleCheckbox}
          />
        
      </table>
      
     
</div>
  )
}