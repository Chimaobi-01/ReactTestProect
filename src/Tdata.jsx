import React from 'react'
import EditButton from './EditButton'
import DelButton from './DelButton'
import photo from '/public/images/photo.jpeg'


export default function Tdata( { records, toggleCheckbox } ) {  


  return (
    <tbody className="w-full " >
    
      {
        records.map((user, id) => (
          <tr key={user.id} >
            <td className="py-4 px-6 border-t text-start text-sm flex ">
          <label className=" inline-flex items-center mr-3">
            <input className="cursor-pointer w-3 h-3 text-blue-600 bg-gray-200 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
              type="checkbox" id={user.id}
              checked={user.checked}
              onChange={() => toggleCheckbox(user.id)}
            />
          </label>
          <span
            className=" inline-flex justify-center items-center rounded-full text-center uppercase relative  w-10 h-10 ">
            <img src={photo} className=" w-full h-full rounded-full object-cover border-none z-0" />
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
            <DelButton user={user} />
            <EditButton user={user} />
          </div>
        </td>
          </tr>
        ))
      }
  
       </tbody>
  )
}