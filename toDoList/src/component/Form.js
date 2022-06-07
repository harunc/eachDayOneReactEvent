import React,{useEffect} from 'react'
import {v4 as uuidV4} from "uuid"
const Form = ({input,setInput,todo,setTodo,setEditedTodo,editedTodo}) => {
    const updateTodo = (title,id,completed)=>{
        const newTodo=todo.map((element)=>
            element.id===id?{title,id,completed}:element
        );
        setTodo(newTodo)
        setEditedTodo("")
    }
    useEffect(()=>{
        if(editedTodo){
            setInput(editedTodo.title)
        } else {
            setInput("")
        }
    },[setInput,editedTodo])
    const onInputChange =(event)=>{
        setInput(event.target.value)
    };

    const onFormSubmit=(event)=>{
        event.preventDefault();
        if(!editedTodo){
            setTodo([...todo,{id:uuidV4(),title:input,completed:false}]);
        setInput("");
        }
        else{
            updateTodo(input,editedTodo.id,editedTodo.completed)
        }
        
    }
  return (
    <form onSubmit={onFormSubmit}>
        <input style={{color:"GrayText"}}type='text' placeholder='Enter a Todo' value={input} required onChange={onInputChange} />
        <button className='btn'style={{width:"3.4rem",height:"2.5rem",textAlign:"center",lineHeight:"1em"}} type='submit'>{editedTodo?"Update":"Add"}</button>
    </form>
  )
}

export default Form