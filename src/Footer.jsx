import React from "react";


export default function Footer({nextPage, prevPage, firstIndex, lastIndex, totalUsers}) {
 


  
    return (
    <footer className="pe-6 ps-6  text-gray-600 py-5 flex  items-center justify-between gap-3">
      <p >Showing {firstIndex + 1} to {lastIndex} of {totalUsers} results</p>
      <div className="w-auto gap-x-3 inline-flex justify-between">
        <button onClick={prevPage} className="border border-solid border-gray-200 pe-3 ps-3 text-md h-10 font-medium rounded-lg hover:bg-gray-100">Previous</button>
        <button onClick={nextPage} className="border border-gray-200 border-solid pe-3 ps-3 text-md h-10 font-medium rounded-lg hover:bg-gray-100">Next</button>
      </div>
    </footer>
  )
  
}