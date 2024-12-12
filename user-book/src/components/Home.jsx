import { Container, Carousel, Card, Row, Col } from 'react-bootstrap'
import nature111 from '../../public/nature111.jpg'
import nature222 from '../../public/nature222.jpg'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
function Home() {
    let [books, setBooks] = useState([])
    useEffect(()=> {
        axios({
            url: 'http://localhost:3000/books',
            method: 'get'
        }).then((res)=> {
            console.log(res)
            setBooks(res.data.data)
        }).catch((err)=> {
            console.log(err)
        })
    },[])
    return (
        <Container fluid>
           <Carousel  fade>
                <Carousel.Item>
                   <img  src = { nature111 } className="d-block w-100"></img>
                   <Carousel.Caption>
                        <h3>Image 1</h3>
                        <p>This is image 1.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                   <img  src = { nature222 } className="d-block w-100"></img>
                   <Carousel.Caption>
                        <h3>Image 2</h3>
                        <p>This is image 2.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <Row className='mt-3'>
            {
                
                books.map((book, index)=> 
                    <Col key = {index} lg= { 3 } className="mt-3">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img src= { book.bookImage} height="200px" width="200px" ></Card.Img>
                        <Card.Body>
                            <Card.Title>{ book.bookName}</Card.Title>
                            <Card.Text>
                                { book.description }
                                <br></br>
                                Author: { book.authorName }
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    </Col>
                )
                
            }
            </Row>
        </Container>
        
    )
}
export default Home