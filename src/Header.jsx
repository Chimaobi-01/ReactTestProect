import React, { useState } from "react";
import Search from "./Search";

export default function Header({users, setUser}) {
  
  return (
    <header className=" px-6 pt-5 flex gap-y-2 flex-col md:justify-between md:flex-row ">
      <p className="text-lg font-semibold ">Members</p>
     <Search users={users} setUser={setUser} />
   </header>
  )
}