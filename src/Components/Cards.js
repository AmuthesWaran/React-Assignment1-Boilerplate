import React from 'react'
import { Button, Card } from 'react-bootstrap'


const Cards = (props) => {
  
  const saveNews = () => {
    const newCard={
      description:props.description,
      url:props.url
    }
    props.readLater(newCard);
  };
  return (
    <div>
        
        
        <Card style={{Width: "30rem", height: "30rem", margin:"1rem" }} >

        <Card.Img variant="top" src={props.urlToImage} alt={props.title}  />
        
        <Card.Body>

            <Card.Title>{props.title}</Card.Title>
            <Card.Text>
            {props.author}
            </Card.Text>            
        </Card.Body>
        <Card.Footer>
        <div className="d-flex ms-4">
            <Button className="m-3" type="button" variant="primary" href={props.url} target="blank"  >Read Now</Button>
            <Button className="m-3" type="submit" variant="primary" onClick={() => {saveNews();}} >Read Later</Button>
            </div>
        </Card.Footer>
    </Card>
    </div>
    
  )
}

export default Cards