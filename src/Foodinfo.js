import React from 'react'
import {useState,useEffect} from 'react'
import { ListGroup,Row,Col,Image } from 'react-bootstrap'
import {useParams} from 'react-router-dom'
import datas from './res.json'


function Foodinfo() {
    const [data,setData]=useState([])
    const params =useParams()

    // const fetchdata =async()=>{
    //     await fetch('/src/res.json')
    //     .then((res)=>res.json())
    //     .then((data)=>setData(data.restaurants))
    // }

    useEffect(()=>{
      setData(datas.restaurants)
        // fetchdata()
    },[])
    console.log("initialdata:",datas)
    console.log(params.id)
    const details = data.find((i)=>i.id == params.id)
    console.log("details",details);

  return (
    <>{
      details?(
        <Row>
          <Col md={3}>
          <Image className='img pt-4' src={details.photograph1} alt={details.name} style={{height:'500px',width:'500px'}}/>
          </Col>
          <Col md={4} className>
            <ListGroup>
              <ListGroup.Item>
                <h2>{details.name}</h2>
                <p>{details.description}</p>
              </ListGroup.Item>
              <ListGroup.Item>
                <h2>{details.address}</h2>
                <p>Cuisine_type:{details.cuisine_type}</p>
              </ListGroup.Item>
            </ListGroup>
            <ListGroup>
              <ListGroup.Item>
                <h4>Operating Hours</h4>
                <p>Monday:{details.operating_hours.Monday}</p>
                <p>Tuesday:{details.operating_hours.Tuesday}</p>
                <p>Wednesday:{details.operating_hours.Wednesday}</p>
                <p>Thursday:{details.operating_hours.Thursday}</p>
                <p>Friday:{details.operating_hours.Friday}</p>
                <p>Saturday:{details.operating_hours.Saturday}</p>
                <p>Sunday:{details.operating_hours.Sunday}</p>
                </ListGroup.Item>
            </ListGroup>

          </Col>
        </Row>):'null'
}</>
  )
}

export default Foodinfo