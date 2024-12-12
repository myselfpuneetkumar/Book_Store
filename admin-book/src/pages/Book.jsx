import {  Container,Button, Table, Form } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from 'react'
import axios from 'axios'
function Book() {
    let [books, setBooks] = useState([])
    let [ isDelete, setIsDelete ] = useState(false)
    let [searchBook, setSarchBook ] = useState('')
    useEffect(()=> {
        axios({
            url: 'http://localhost:3000/books',
            method: 'get',
            params: { 
                search: searchBook
            }
        }).then((res)=> {
            console.log(res)
            setBooks(res.data.data)
            setIsDelete(false)
        }).catch((err)=> {
            console.log(err)
        })

    },[isDelete, searchBook])
    const navigate = useNavigate()
    function addBookRoute() {
        navigate('/add/book')
    }
    function goToBookEdit(id) {
        
        navigate('/edit/book/' + id)
    }
    function handleDelete(id) {
    
        axios({
            url: 'http://localhost:3000/delete/book/' + id,
            method: 'delete'
        }).then(()=> {
           setIsDelete(true)
          
        }).catch((err)=> {
            console.log(err)
        })
    }
    return (
        <Container>
            <Form>
                <Form.Group className="mb-3">
                    <Form.Control type="text" placeholder="Enter book Name to search" onChange = { (e)=> setSarchBook(e.target.value)}/>
                </Form.Group>
            </Form>
            <Button variant="dark" onClick={ addBookRoute } style={{ float: 'right', marginBottom: '5px'}}>Add Book +</Button>
            <Table bordered hover className="mt-5">
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Book Name</th>
                        <th>Author Name</th>
                        <th>Price</th>
                        <th>Language</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        books.map((book, index)=>
                        <tr key = {index}>
                            <td><img src= { book.bookImage } height="30px" width="30px"></img></td>
                            
                            <td>{ book.bookName } </td>
                            <td>{ book.authorName } </td>
                            <td>{ book.price } </td>
                            <td>{ book.language } </td>
                            <td>
                                <Button variant="secondary" size="sm" onClick= {()=> goToBookEdit(book._id)}>edit</Button>
                                <Button variant="danger" size="sm" style={{ marginLeft: '5px'}} onClick= {()=> handleDelete(book._id)}>delete</Button>
                            </td>
                        </tr>
                        )
                    }
                </tbody>

            </Table>
        </Container>
    )
}
export default Book
