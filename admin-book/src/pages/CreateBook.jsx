import { Form, Button } from 'react-bootstrap'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
function CreateBook() {
    const navigate = useNavigate()
    function addBook() {
        let data = {
            bookName: bookName,
            authorName: authorName,
            description: description,
            publisherName: publisherName,
            price: price,
            language: language
        }
        axios({
            url: 'http://localhost:3000/add/book',
            method: 'post',
            data: data
        }).then((res)=> {
           navigate('/book')
        }).catch((err)=> {
            console.log(err)
        })
    }
    let [bookName, setBookName] = useState('')
    let [authorName, setAuthorName] = useState('')
    let [description, setDescription] = useState('')
    let [publisherName, setPublisherName] = useState('')
    let [price, setPrice] = useState(0)
    let [language, setLanguage] = useState('')
    return (
        <Form>
            <Form.Group className="mb-3">
                <Form.Label>Book Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Book Name" onChange = { (e)=> setBookName(e.target.value) } />
            </Form.Group>
            { bookName }
            <Form.Group className="mb-3">
                <Form.Label>Author</Form.Label>
                <Form.Control type="text" placeholder="Enter Author Name" onChange = { (e)=> setAuthorName(e.target.value) } />
            </Form.Group>
            { authorName }
            <Form.Group className="mb-3">
                <Form.Label>Description</Form.Label>
                <Form.Control as="textarea" rows={3} onChange = { (e)=> setDescription(e.target.value) } />
            </Form.Group>
            { description  }
            <Form.Group className="mb-3">
                <Form.Label>Publisher</Form.Label>
                <Form.Control type="text" placeholder="Enter Publisher Name" onChange = { (e)=> setPublisherName(e.target.value) } />
            </Form.Group>
            { publisherName }
            <Form.Group className="mb-3">
                <Form.Label>Price</Form.Label>
                <Form.Control type="number" placeholder="Enter Price" onChange = { (e)=> setPrice(e.target.value) } />
            </Form.Group>
            { price }
            <Form.Group className="mb-3">
                <Form.Label>Language</Form.Label>
                <Form.Control type="text" placeholder="Enter Text"  onChange = { (e)=> setLanguage(e.target.value) }/>
            </Form.Group>
            { language }
            <Button variant="primary" onClick={ addBook }>Add Book</Button>
        </Form>  
    )
}
export default CreateBook