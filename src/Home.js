import React from 'react'
import {useState,useEffect} from 'react'
import {Row,Col} from 'react-bootstrap'
import data from './res.json'
import Restuarent from './Restuarent'

function Home() {
    const[hotel,setHotels]=useState([])
    // const testdata=async ()=>{
    //     await fetch('/src/res.json')
    //     .then((res)=>res.json())
    //     .then((data)=>setHotels(data))
    // }
        useEffect(()=>{
            // testdata()
            setHotels(data.restaurants)
    },[])

    console.log("Data",hotel)
  return (
    <Row>
      {hotel.map((item)=>(
        <Col sm={12} md={8} lg={6} xl={3}>
        <Restuarent  item={item}/>
        </Col>
    
      ))}
    </Row>
  )
}

export default Home