import React from 'react';
import { Card } from 'react-bootstrap';
import Store from '../expand/StoreRedux';
import { Button } from 'react-bootstrap';
function CardSingle(props:any) {
  const { date, title, detail, link } = props;
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
        <Card.Title>{date}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{title}</Card.Subtitle>
        <Card.Text>
          {detail}
        </Card.Text>
        <Card.Link href={link} style={{display:"flow-root"}}>Read more</Card.Link>
    </Card.Body>
    </Card>
  );
}

function click(){
    Store.dispatch({ type: 'counter/incremented' })
    Store.subscribe(() => console.log(Store.getState()))
}

export default CardSingle;
