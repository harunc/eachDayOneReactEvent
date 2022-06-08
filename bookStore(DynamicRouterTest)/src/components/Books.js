import React from 'react'
import Book from './Book'
import data from './data'
const Books = () => {
  const books=data
  return (<>{books.map((book)=>{
    const{id,image,name,rating,price,text}=book
    return (
      <Book key={id} id={id} img={image} name={name} rating={rating} price={price} text={text} />
    )
  })}
  </>
  )
}

export default Books