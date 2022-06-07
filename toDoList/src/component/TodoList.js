import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
const TodoList = ({todo,setTodo,setEditedTodo}) => {
    const handleDelete = (id) =>{
        setTodo(todo.filter((element)=> element.id!==id))
    }
    const handleEdit = ({id}) =>{
        const findTodo=todo.find((item)=>item.id===id)
        console.log(findTodo.title)
        setEditedTodo(findTodo);
    }
    const handleComplete=(element)=>{
        setTodo(
            todo.map((item)=>{
                if(item.id===element.id){
                    return {...item, completed: !item.completed}
                }
                return item
            })
        )
    }
    
  return (
    <div>
        {todo.map((element)=>(
     <li key={element.id}>
         <div>
        
         <input
          type="text"
          value={element.title}
          style={{color:"GrayText",backgroundColor:`${element.completed?"rgb(24, 68, 7)":"#222"}`}}
           className={`list ${element.completed ? "complete":"" }`}
            onChange={(event)=> event.preventDefault()}
            />
            
                <button className="btn btn1" title='Done' onClick={()=>handleComplete(element)}><FontAwesomeIcon icon="check-square" /></button>
                <button className="btn btn2" title='Edit' onClick={()=>handleEdit(element)}><FontAwesomeIcon icon="edit" /></button>
                <button className="btn btn3" title='Delete' onClick={()=>handleDelete(element.id)}><FontAwesomeIcon icon="trash-can" /></button>
            </div>
     </li>
     ))}

    </div>
  );
};

export default TodoList