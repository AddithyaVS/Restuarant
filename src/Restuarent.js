import React from 'react';
import {Card,Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
 

export default function Restuarent({item}) {
  return (
    <div>
      <Link to={`details/${item.id}`}>
        <Card style={{ height:"700px" }} className="mb-5">
      <Card.Img variant="top" src={item.photograph1} style={{height:"255px"}} />
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Text>{item.description}</Card.Text>
                {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
    </Link>

    </div>
  );
}