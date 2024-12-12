import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route}from 'react-router-dom'
import Book from './pages/Book.jsx'
import CreateBook from './pages/CreateBook.jsx'
import CreateBookImg from './pages/CreateBookImg.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Login from './pages/Login.jsx'
import BookForEdit from './pages/BookForEdit.jsx'
import Sidebarmenu from './Sidebarmenu.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Sidebarmenu>
        <Routes>
          <Route path = '/' element = {<Login></Login>}></Route>
          <Route path = '/book' element = {<Book></Book>}></Route>
          {/* <Route path = '/add/book' element = { <CreateBook></CreateBook>}></Route> */}
          <Route path = '/add/book' element = { <CreateBookImg></CreateBookImg>}></Route>
          <Route path = '/edit/book/:id' element = { <BookForEdit />}></Route>
          <Route path = '/dashboard' element = { <Dashboard></Dashboard>}></Route>
        </Routes>
      </Sidebarmenu>
    </BrowserRouter>
  </StrictMode>,
)
