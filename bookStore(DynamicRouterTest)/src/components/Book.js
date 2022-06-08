import React from 'react'
import { Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
const Book = ({id,img,name,rating,price,text}) => {
  const navigate = useNavigate()
  return (
    <Card className="cardClass">
    <Card.Img src={img} alt="deneme"/>
    <Card.ImgOverlay>
      <div style={{display:"inline-block"}}>{name}</div> <div style={{display:"inline-block", marginLeft:"50%"}}>Rate : {rating}</div>
    <Card.Text>${price}</Card.Text>

         <Card.Text>{text}</Card.Text>
</Card.ImgOverlay>
  <button onClick={()=>navigate(`/${id}`)}>Show Details</button>
  </Card>
  )
}

export default Book