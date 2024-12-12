import { Form, Button } from 'react-bootstrap'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
function CreateBookImg() {
    const navigate = useNavigate()
    function addBook() {
        // let data = {
        //     bookName: bookName,
        //     authorName: authorName,
        //     description: description,
        //     publisherName: publisherName,
        //     price: price,
        //     language: language
        // }
        let formData = new FormData();
        formData.append('bookName', bookName)
        formData.append('authorName', authorName)
        formData.append('description', description)
        formData.append('publisherName', publisherName)
        formData.append('price', price)
        formData.append('language', language)
        formData.append('file', file)
        axios({
            url: 'http://localhost:3000/add/book',
            method: 'post',
            data: formData,
            headers : {
                'content-type': 'multipart/form-data',
            }
        }).then(()=> {
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
    let [file, setFile] = useState('')
    return (
        <Form>
            <Form.Group className="mb-3">
                <Form.Label>Book Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Book Name" onChange = { (e)=> setBookName(e.target.value) } />
            </Form.Group>
            
            <Form.Group className="mb-3">
                <Form.Label>Author</Form.Label>
                <Form.Control type="text" placeholder="Enter Author Name" onChange = { (e)=> setAuthorName(e.target.value) } />
            </Form.Group>
            
            <Form.Group className="mb-3">
                <Form.Label>Description</Form.Label>
                <Form.Control as="textarea" rows={3} onChange = { (e)=> setDescription(e.target.value) } />
            </Form.Group>
            
            <Form.Group className="mb-3">
                <Form.Label>Publisher</Form.Label>
                <Form.Control type="text" placeholder="Enter Publisher Name" onChange = { (e)=> setPublisherName(e.target.value) } />
            </Form.Group>
            
            <Form.Group className="mb-3">
                <Form.Label>Price</Form.Label>
                <Form.Control type="number" placeholder="Enter Price" onChange = { (e)=> setPrice(e.target.value) } />
            </Form.Group>
            
            <Form.Group className="mb-3">
                <Form.Label>Language</Form.Label>
                <Form.Control type="text" placeholder="Enter Text"  onChange = { (e)=> setLanguage(e.target.value) }/>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Select Book Image</Form.Label>
                <Form.Control type="file" placeholder="Enter Text"  onChange = { (e)=> setFile(e.target.files[0]) }/>
            </Form.Group>
            <Button variant="primary" onClick={ addBook }>Add Book</Button>
        </Form>  
    )
}
export default CreateBookImg