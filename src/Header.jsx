import React from "react";
import Search from "./Search";

export default function Header() {
  
  return (
    <header className=" px-6 pt-5 flex gap-y-2 flex-col md:justify-between md:flex-row ">
      <p className="text-lg font-semibold ">Members</p>
     <Search  />
   </header>
  )
}