import React from 'react'

export default function SearchResultList({ results }) {
  return (
    <div className="w-60 flex flex-col shadow-lg shadow-gray-500/50 rounded-lg mt-2 overflow-y-auto max-h-72 absolute z-10 bg-white ">
      {
        results.map((result, id) => {
          return <div
                   className="p-4 hover:bg-gray-200 cursor-pointer"
                   key={id}>
            {result.name}
          </div>
        })
      }
    </div>
  )
}