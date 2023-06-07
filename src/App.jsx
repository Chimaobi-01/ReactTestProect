
import React from "react";
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Table from './Table.jsx'

export default function App() {
  
  return (
    <div className="container mx-auto p-8">
      <div className="bg-white rounded-lg shadow">
      <Header />
      <Table />
      <Footer />
       
      </div>
    </div>
  )
}
