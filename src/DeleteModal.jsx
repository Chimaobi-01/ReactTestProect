import React from 'react'

export default function DeleteModal(props) {
  if(!props.show) {
    return null
  }
  
  return (
    <div
      onClick={props.onClose}
      className="bg-[rgba(0,0,0,0.5)] fixed right-0 bottom-0 left-0 top-0 flex justify-center items-center">
  <div 
    onClick={e => e.stopPropagation()}
    className="relative px-4  md:flex md:items-center md:justify-center">
    <div className=" bg-white container-sm  rounded-lg md:max-w-md p-4 mx-auto md:relative">
      <div >
        <div className="rounded-full border border-gray-300 flex items-center justify-center w-16 h-16 flex-shrink-0 mx-auto">
          <i className="text-2xl fa fa-exclamation-triangle" aria-hidden="true"></i>
        </div>
        <div className=" text-[2.5vw] md:text-base mt-4  text-center">
          <p className="font-bold">Delete your account</p>
          <p className=" text-gray-700 mt-1 break-words">Are you sure you want to delete? This cannot be undone.
          </p>
        </div>
      </div>
      <div className="text-center md:text-right mt-4 flex-col md:flex-row flex md:justify-end">
        <button className="block md:inline-block md:w-auto px-4 py-3 md:py-2 bg-red-200 text-red-700 rounded-lg font-semibold text-sm md:ml-2 md:order-2">Delete
            Account</button>
        <button
          onClick={props.onClose}
          className="block md:inline-block md:w-auto px-4 py-3 md:py-2 bg-gray-200 rounded-lg font-semibold text-sm mt-4
          md:mt-0 md:order-1">Cancel</button>
      </div>
    </div>
  </div>




      
    </div>
  )
}