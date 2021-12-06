import React from 'react';
import { Card } from 'react-bootstrap';
import Store from './StoreRedux'
function CardSingle() {
  return (
    <Card style={{ width: '18rem',
                    borderStyle: 'solid',
                    borderWidth:"0.1px",
                    backgroundColor:"gainsboro",
                    float: 'left',
                    flexDirection: "row",
                    paddingBlock: "10",
                    marginLeft:"7%",
                    marginTop: "3%"
                }}>
    <Card.Body style={{ display: "" }}>
        <Card.Title>Card Title</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Text>
        Some quick example text to build on the card title and make up the bulk of
        the card's content.
        </Card.Text>
        <Card.Link href="#" style={{display:"flow-root"}}>Card Link</Card.Link>
        <Card.Link onClick={click} style={{cursor:"pointer",
                                           textDecoration:"underline"}}>Another Link</Card.Link>
    </Card.Body>
    </Card>
  );
}

function click(){
    Store.dispatch({ type: 'counter/incremented' })
    Store.subscribe(() => console.log(Store.getState()))
}

export default CardSingle;
