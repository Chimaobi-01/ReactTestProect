
import React, { useState } from "react";
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Table from './Table.jsx'
import {MockData} from "./MockData.jsx"

export default function App() {

  const [users, setUser] = useState(MockData)

  

  
// selectedRow Functionality
  
  const [selectAll, setSelectAll] = useState(false);
  const [checkboxes, setCheckboxes] = useState(users);
  const toggleSelectAll = () => {
    const updatedCheckboxes = checkboxes.map(checkbox => ({
      ...checkbox,
      checked: !selectAll
    }));
    setCheckboxes(updatedCheckboxes);
    setSelectAll(!selectAll);
  };
  const toggleCheckbox = (id) => {
    const updatedCheckboxes = checkboxes.map(checkbox => {
      if (checkbox.id === id) {
        return {
          ...checkbox,
          checked: !checkbox.checked
        };
      }
      return checkbox;
    });
    setCheckboxes(updatedCheckboxes);
    setSelectAll(updatedCheckboxes.every(checkbox => checkbox.checked));
  };

  



  // Pagination Functionality

  const [currentPage, setCurrentPage] = useState(1)
  const recordsPerPage = 5
  const lastIndex = currentPage * recordsPerPage
  const firstIndex = lastIndex - recordsPerPage
  const records = checkboxes.slice(firstIndex, lastIndex) 
  const nPage = Math.ceil(users.length / recordsPerPage)
  const totalUsers = MockData.length
  function prevPage() {
    if(currentPage !== 1){
      setCurrentPage(currentPage - 1)
    }
  }
  function nextPage() {
    if(currentPage !== nPage){
      setCurrentPage(currentPage + 1)
    }
  }



  return (
    <div className="container mx-auto p-8">
      <div className="bg-white rounded-lg shadow">
      <Header  />
        
      <Table records={records} selectAll={selectAll} toggleSelectAll={toggleSelectAll} toggleCheckbox={toggleCheckbox}
        
        />

        
      <Footer nextPage={nextPage} prevPage={prevPage} totalUsers={totalUsers} firstIndex={firstIndex} lastIndex={lastIndex} />
       
      </div>
    </div>
  )
}
