import React,{Component,useState,useEffect} from "react";
import { Card } from 'react-bootstrap';
import Store from '../expand/StoreRedux';
import Button from './cardButton';
function CardSingle(props:any) {
  const { date, title, detail, link, ids } = props;
  const [colour, setColour] = useState('gainsboro')
  return (
    <Card key={ids} style={{ width: '18rem',
                    borderStyle: 'solid',
                    borderWidth:"0.1px",
                    backgroundColor: colour,
                    float: 'left',
                    flexDirection: "row",
                    paddingBlock: "10",
                    marginLeft:"7%",
                    marginTop: "3%",
                }} onMouseEnter={() => setColour("green")}
                   onMouseLeave={() => setColour("gainsboro")}>
    <Card.Body style={{ display: "" }}>
        <Card.Title>{date}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{title}</Card.Subtitle>
        <Card.Text>
          {detail}
        </Card.Text>
        <Button link={link}/>
    </Card.Body>
    </Card>
  );
}

function click(){
    Store.dispatch({ type: 'counter/incremented' })
    Store.subscribe(() => console.log(Store.getState()))
}

export default CardSingle;
