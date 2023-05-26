import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Books from '../Components/Books'
import SingleBook from '../Components/SingleBook'
import EditBook from "../Components/EditBook"

function AllRoutes() {
  return (
    <div>
        <Routes>
        <Route path="/" element={<Books/>} />
  <Route path="/books/:id" element={<SingleBook/>} />
  <Route path="/books/:id/edit" element={<EditBook/>} />
  <Route path="*" element={<h3>Page Not Found</h3>} />
        </Routes>
    </div>
  )
}

export default AllRoutes