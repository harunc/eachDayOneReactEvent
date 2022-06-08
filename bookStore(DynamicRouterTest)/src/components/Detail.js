import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import data from './data'

const Detail = () => {
    const bookList=data
    const params=useParams()
    const userId= params.bookId
    const[book,setBook]=useState({})
    useEffect(()=>{
        bookList.filter((book)=>{
        if (`${book.id}`===userId){
            setBook(book)
            console.log(book)
            return book
        }
        else{
            return null
        }
    })
    },[bookList,userId])
    
  return (<>
    <div>Detail : {book.id}</div>
    <div>Detail : {book.price}</div>
    <div>Detail : {book.name}</div>
    <div>Detail : {book.text}</div>
    <div>Detail : {book.rating}</div>
    <img src={book.image} alt={book.name}/></>
  )
}

export default Detail