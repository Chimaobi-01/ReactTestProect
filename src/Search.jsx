import React, {useState} from 'react'
import SearchResultList from './SearchResultList.jsx'


export default function Search({users, setUser}) {
  const [input, setInput] = useState('')
  const [ results, setResults ] = useState([])

  function fetchData(value) {
    
    const results = users.filter((d) => {
      return value && d && d.name && d.name.toLowerCase().includes(value)
    })
    setResults(results)
  }
  
  function handleChange(value) {
    setInput(value)
    fetchData(value.toLowerCase())
  }
  
  return (
    <div className="relative ">
       <label className="my-0 flex max-w-xs text-md relative ">
        <div className="w-10 h-10 flex justify-center items-center absolute left-0 top-0 ">
          <i className="fa fa-search" aria-hidden="true"></i>
        </div>
        <input type="text"
          value={input}
          onChange={(e) => handleChange(e.target.value)}
          placeholder="Search"
          className=" border pe-3 ps-10 h-10 rounded-lg "
          />
      </label>
        <SearchResultList results={ results } />
    </div>
  )
}


