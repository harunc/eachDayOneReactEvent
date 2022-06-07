import React, { useState,useEffect } from 'react'
import Header from './component/Header'
import Form from './component/Form'
import TodoList from './component/TodoList'

function App() {

  const initialState=JSON.parse(localStorage.getItem("todo")) || [];
  const[input,setInput]=useState("")
  const[todo,setTodo]=useState(initialState)
  const[editedTodo,setEditedTodo]=useState(null)

useEffect(()=>{
  localStorage.setItem("todo",JSON.stringify(todo));
},[todo])

  return (
    <main>
      <section className='container'>
        <div className='container_header'><Header/></div>
        <div><Form
        input={input}
        setInput={setInput}
        todo={todo}
        setTodo={setTodo}
        setEditedTodo={setEditedTodo}
        editedTodo={editedTodo}/></div>
        <div><ul><TodoList todo={todo} setTodo={setTodo} setEditedTodo={setEditedTodo}/></ul></div>
        
        
      </section>
    </main>
  )
}

export default App
