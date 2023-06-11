import React from 'react'
import EditButton from './EditButton'
import DelButton from './DelButton'


export default function Tdata( {users, records} ) {  


  return (
    <tbody className="w-full " >
    
      {
        records.map((user, id) => (
          <tr key={id} >
            <td className="py-4 px-6 border-t text-start text-sm flex ">
          <label>
            <input type="checkbox" />
          </label>
          <span className="ms-3 ">
            <img src="" className="" />
          </span>
          <div className="ms-3 ">
            <p className="font-medium ">{user.name}</p>
            <p className="text-gray-600 ">@{user.username}</p>
          </div>
        </td>
             <td className="border-t py-4 px-6 text-start text-sm ">
          <span
            className="pe-2 ps-2 pb-0.5 py-0.5 leading-6 align-middle text-xs rounded-2xl bg-green-100 "
          >active</span>
        </td>
            <td className="border-t py-4 px-6 text-start text-sm ">
          <p className="text-gray-600 font-medium ">{user.email}</p>
        </td>
        <td className="py-4 px-6 border-t text-start text-sm ">
          <p className="text-gray-600 font-medium ">Senior Developer Advocate </p>
        </td>
            <td className="py-4 px-6 border-t text-start text-sm ">
          <div className="text-gray-200 font-medium flex items-center gap-x-1.5 ">
            <i className="fa fa-star w-4 h-4 inline-block text-xl shrink-0 leading-4 text-blue-500 " aria-hidden="true"></i>
            <i className="fa fa-star w-4 h-4 inline-block text-xl shrink-0 leading-4 text-blue-500 " aria-hidden="true"></i>
            <i className="fa fa-star w-4 h-4 inline-block text-xl shrink-0 leading-4 text-blue-500 " aria-hidden="true"></i>
            <i className="fa fa-star w-4 h-4 inline-block text-xl shrink-0 leading-4 text-blue-500 " aria-hidden="true"></i>
            <i className="fa fa-star w-4 h-4 inline-block text-xl shrink-0 leading-4 " aria-hidden="true"></i>
          </div>
        </td>
             <td className="py-4 px-6 border-t text-start text-sm ">
          <div className="flex items-center gap-x-0.5 ">
            <DelButton />
            <EditButton />
          </div>
        </td>
          </tr>
        ))
      }
  
       </tbody>
  )
}