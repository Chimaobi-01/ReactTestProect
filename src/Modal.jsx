import React from 'react'

export default function Modal(props) {

  if (!props.show) {
    return null
  }
  return (
    <div onClick={props.onClose} className="bg-[rgba(0,0,0,0.5)] fixed right-0 bottom-0 left-0 top-0 flex justify-center items-center z-10">
      
      <div onClick={e => e.stopPropagation()} className="w-[380px] bg-white relative z-20 rounded-lg ">
        
        <div className=" flex justify-end">
          <button onClick={props.onClose} className=" px-3 text-gray-600 h-10 rounded-lg hover:bg-gray-100">
          <i className="far text-2xl fa-window-close"></i>
        </button>
        </div>
        
        <div className="flex flex-col justify-center items-center ">
          <div className=" bg-white p-8 shadow-md">
            <h1 className="text-2xl font-bold mb-4">Edit User Details</h1>
            <form>
              <div >
                <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
                <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="w-5 h-5 text-gray-500 dark:text-gray-400" viewBox="0 0 16 16"> <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2z"/> </svg>
  </div>
 <input placeholder={props.user.name} type="text" id="name" name="name" className="ps-10 border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring focus:border-blue-300" />
</div>
<label htmlFor="website-admin" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
            </div>
            <input  placeholder={props.user.email} type="email" id="email" name="email" className="ps-10 border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring focus:border-blue-300" />
          </div>
        </div>
          
        <div >
          <label htmlFor="role" className="block text-gray-700 font-bold mb-2">Role</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <i className="fa-solid fa-user-group w-5 h-5 text-gray-500 dark:text-gray-400"></i>
            </div>
            <input  placeholder="Senior Developer Advocate" type="email" id="email" name="email" className="ps-10 border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring focus:border-blue-300" />
          </div>
        </div>
        
<select  className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none  focus:outline-none focus:ring-0 focus:border-gray-200 peer">
    <option defaultValue className="text-green-500">active</option>
    <option className="text-red-500" value="inactive">inactive</option>
</select>
              <div className="flex justify-center">
                <button type="submit" className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Save</button>
              </div>
       
      </form>
    </div>
  </div>
        
      </div>
    </div>

  )
}