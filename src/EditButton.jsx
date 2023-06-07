import React, { useState } from 'react'
import Modal from './Modal.jsx'
/* container */
export default function EditButton(props) {

  const [show, setShow] = useState(false)
  
  return (
    <>
     <button
       onClick={() => setShow(true)}
      className="px-3 text-sm h-10 font-semibold rounded-lg hover:bg-gray-100">
       <i className="text-xl fa-solid fa-pen"></i>
     </button>
     <Modal show={show} onClose={() => setShow(false)} />
    </>
  )
}
