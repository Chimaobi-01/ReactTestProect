import React from "react";


export default function Footer({ nextPage, prevPage, firstIndex, lastIndex, totalUsers }) {




  return (
    <footer className="pe-6 ps-6  text-gray-600 py-5 flex  items-center justify-between gap-3">
      <p >Showing {firstIndex + 1} to {lastIndex} of {totalUsers} results</p>
      <div className="w-auto gap-x-3 inline-flex justify-between">

        <button onClick={prevPage} className="inline-flex hover:bg-gray-400 hover:text-white hover:border-gray-400 font-semibold border-solid border-gray-200 items-center px-4 py-2 mr-3 text-sm font-medium  border rounded-lg ">
          <svg aria-hidden="true" className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd"></path></svg>
          Previous
        </button>
        <button onClick={nextPage} className="inline-flex hover:bg-gray-400 hover:border-gray-400 font-semibold hover:text-white border-solid border-gray-200 items-center px-4 py-2 mr-3 text-sm font-medium  border rounded-lg ">
          Next
          <svg aria-hidden="true" className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
        </button>


      </div>
    </footer>
  )

}