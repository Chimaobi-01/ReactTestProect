import React from 'react'

export default function Modal(props) {

  if (!props.show) {
    return null
  }

  const images = {
    photo1: '/public/images/photo.jpeg'
  }

  return (
    <div
      onClick={props.onClose}
      className="bg-[rgba(0,0,0,0.5)] fixed right-0 bottom-0 left-0 top-0 flex justify-center items-center">

      <div
        onClick={e => e.stopPropagation()}
        className="w-[400px] md:w-auto bg-white relative z-20 ">
        <div className="block md:flex ">


          <div className=" md:w-3/6 p-4 sm:p-6 lg:p-8 bg-white shadow-md">
            <div className=" ">
              <span className="text-xl font-semibold block">Admin Profile</span>
            </div>

            <span className="text-gray-600">This information is secret so be careful</span>
            <div className=" p-8 mx-2 flex justify-center">
              <img id="showImage" className="max-w-xs w-32 items-center border" src={images.photo1} alt="" />
            </div>
          </div>

          <div className=" md:w-3/6 p-8 bg-white lg:ml-4 shadow-md relative">

            <div className="rounded  shadow p-6">
              <div className="pb-6">
                <label for="name" className="font-semibold text-gray-700 block pb-1">Name</label>
                <div className="flex me-1">
                  <input id="username" className="border-b-2 w-full border-1  rounded-r px-4 py-2 " type="text" placeholder="Jane Name" />
                </div>
              </div>
              <div className="pb-4">
                <label for="about" className="font-semibold text-gray-700 block pb-1">Email</label>
                <div className="flex me-1">
                  <input id="email" className="border-b-2 w-full md:w-52 border-1 rounded-r px-4 py-2 " type="email" placeholder="example@example.codm" />
                </div>
                <button className="btn rounded-full m-auto text-gray-700 md:w-4/5  block btn-purple-600 px-3 py-2 border mt-6  text-md hover:font-semibold hover:text-white hover:bg-gray-700">save and continue</button>
              </div>

            </div>



          </div>

        </div>
        <div className="absolute top-0 right-0 ">
          <button
            onClick={props.onClose}
            className="px-3 text-gray-600 h-10 rounded-lg hover:bg-gray-100"><i className="far text-2xl fa-window-close"></i>
          </button>
        </div>
      </div>


    </div>
  )
}