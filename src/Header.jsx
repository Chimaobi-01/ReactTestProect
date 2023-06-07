import React from "react";

export default function Header() {
  return (
    <header className=" px-6 pt-5 flex gap-y-2 flex-col md:justify-between md:flex-row ">
      <p className="text-lg font-semibold ">Members</p>
      <label className="my-0 flex max-w-xs text-md relative ">
        <div className="w-10 h-10 flex justify-center items-center absolute left-0 top-0 ">
          <i className="fa fa-search" aria-hidden="true"></i>
        </div>
        <input type="text"
          placeholder="Search"
          className=" border pe-3 ps-10 h-10 rounded-lg "
          />
      </label>
    </header>
  )
}