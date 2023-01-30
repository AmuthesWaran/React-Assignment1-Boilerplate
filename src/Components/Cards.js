import React from 'react'
import { Button, Card, Row } from 'react-bootstrap'


const Cards = (props) => {

  const saveNews = () => {
    const newCard = {
      description: props.description,
      url: props.url
    }
    props.readLater(newCard);
  };
  return (
    <div>

      <Row>
        <Card sx={{ maxWidth: 345 }} >

          <Card.Img
            variant="top"
            src={props.urlToImage}
            height="194"
            width="90"
            alt={props.title}
          />

          <Card.Body>

            <Card.Text>{props.title}</Card.Text>
            <Card.Text>
              {props.author}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <div className="d-flex ms-4">
              <Button className="m-3" type="button" variant="primary" href={props.url} target="blank"  >Read Now</Button>
              <Button className="m-3" type="submit" variant="primary" onClick={() => { saveNews(); }} >Read Later</Button>
            </div>
          </Card.Footer>
        </Card>
      </Row>
    </div>

  )
}

export default Cards