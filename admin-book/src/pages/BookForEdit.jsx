import { Form, Button } from 'react-bootstrap'
import { useParams, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react";
import axios from 'axios'
function BookForEdit() {
    const navigate = useNavigate()
    let [book, setBook ] = useState({ 
        bookName: '',
        authorName: '',
        description: '',
        publisherName: '',
        price: 0,
        language: ''
    })
    const params = useParams();
    let id = params.id;
    console.log(id, 'id')
    function editBook() {
        
        axios({
            url: 'http://localhost:3000/edit/book/'+ id,
            method: 'put',
            data: book
        }).then((res)=> {
            console.log(res)
            navigate('/book')
        }).catch((err)=> {
            console.log(err)
        })
    }
    useEffect(()=> {
        axios({
            url: 'http://localhost:3000/get/book/' + id,
            method : 'get'
        }).then((res)=> {
            setBook(res.data.data)
            console.log(res)
        }).catch((err)=> {
            console.log(err)
        })
    }, [params])
    function handleChange(e) {
        let name = e.target.name
        let value = e.target.value
        setBook((prev)=> {
            return {
                ...prev, [name]: value
            }
        })
    }

    return (
        <Form>
        <Form.Group className="mb-3">
            <Form.Label>Book Name</Form.Label>
            <Form.Control type="text" name = "bookName" value = { book.bookName } onChange= { handleChange } />
        </Form.Group>
        
        <Form.Group className="mb-3">
            <Form.Label>Author</Form.Label>
            <Form.Control type="text" name = "authorName" value = { book.authorName } onChange= { handleChange } />
        </Form.Group>
        
        <Form.Group className="mb-3">
            <Form.Label>Description</Form.Label>
            <Form.Control as="textarea" rows={3}  name = "description" value = { book.description } onChange= { handleChange } />
        </Form.Group>
        
        <Form.Group className="mb-3">
            <Form.Label>Publisher</Form.Label>
            <Form.Control type="text" placeholder="Enter Publisher Name" name = "publisherName" value = { book.publisherName } onChange= { handleChange } />
        </Form.Group>
        
        <Form.Group className="mb-3">
            <Form.Label>Price</Form.Label>
            <Form.Control type="number" name="price" value = { book.price } onChange= { handleChange }  />
        </Form.Group>
    
        <Form.Group className="mb-3">
            <Form.Label>Language</Form.Label>
            <Form.Control type="text" name ="language" value = { book.language } onChange= { handleChange } />
        </Form.Group>
        
        <Button variant="primary" onClick={ editBook }>Edit Book</Button>
    </Form>  
        
    )
}
export default BookForEdit