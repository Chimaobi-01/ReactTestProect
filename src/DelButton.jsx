import React, { useState } from 'react'
import DeleteModal from './DeleteModal.jsx'
/* container */
export default function DelButton(props) {

  const [show, setShow] = useState(false)
  
  return (
    <>
      <button
        onClick={() => setShow(true)}
        className="px-3 text-sm h-10 font-semibold rounded-lg hover:bg-gray-100"><i className="text-xl fa fa-trash-o" aria-hidden="true"></i>
            </button>
     <DeleteModal show={show} onClose={() => setShow(false)} />
    </>
  )
}