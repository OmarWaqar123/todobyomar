import { useState } from 'react'
import './App.scss'
import React,{useMemo} from 'react'
import {AiOutlineCheck} from "react-icons/ai"
import {BsTrash3} from "react-icons/bs"
import ModalComponent from "./ModalComponent"
import Spinner from "./Spinner"

const API_base = "http://localhost:4000"

function App() {
  

  const [alltasks, Setalltasks] = React.useState([])
  const [todo_id_todelete, Settodo_id_todelete] = React.useState(null)
  const [modalOpen, setModalOpen] = useState(false);
  const [todo, Settodo] = React.useState("")
  


  React.useEffect(()=>{
     fetch(API_base + "/todo/all").then(res => res.json()).then(data => Setalltasks(data)).catch(e => console.log(e))
  },[])
  
  async function toggleDone(id) {
    await fetch(API_base + "/todo/complete/" + id, {
      method: "PUT"
    }).then(res => res.json()).then(data => {
      console.log(data)
      Setalltasks(prevTasks => prevTasks.map(item => item._id === id ? {...item, completed: data.completed}
        : item
        ))
  
      
    }).catch(e => console.log(e))    
  }

  // console.log(alltasks)

  React.useEffect(()=>{
    if(todo_id_todelete !== null) {
      fetch(API_base + "/todo/delete/" + todo_id_todelete,{method: "DELETE"}).then(res => res.json())
      .then(data => {
        console.log(data)
        const newData = alltasks.filter(task => task._id !== data._id)
        Setalltasks(newData)
      }).catch(e => console.log(e))

      Settodo_id_todelete(null)
    }

  },[todo_id_todelete])
  

  function OpentheModal(){
    setModalOpen(true)
  }
  

  async function AddTodo() {
    if(todo.length !== 0) {
    await fetch(API_base + "/todo/new", {
      method: "POST",
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify({
        text : todo
      })
      
    }).then(res => res.json()).then(data => Setalltasks(prev => [...prev, data]))

    Settodo("")
    setModalOpen(false)

  }
  }

  return (
    <div className='app'>
    <h1 className='top-head'>Welcome !</h1>
    <h5>YOUR TASKS</h5>

      {alltasks.length === 0 ? <Spinner/> : <div className="todos">
        {alltasks.length !== 0 ? alltasks.map(todo => (
            <div className="single_todo" key={todo._id}>
            <div className='tick-dad' onClick={() => toggleDone(todo._id)}>
            {todo.completed ? <AiOutlineCheck className='tick'/> : null}
            </div>
            <p className={todo.completed ? "text-with-completed" : "task-body"}>{todo.text}
            </p>
            <BsTrash3 className='trash' onClick={() => Settodo_id_todelete(todo._id)}/>
          </div>
        ))  : null }
        


        

      </div>}

      <div className="add-new-tasks" onClick={OpentheModal}>
        <p className='add-cursor'>+</p>
      </div>

      <ModalComponent 
      setModalOpen={setModalOpen}
       modalOpen={modalOpen}
       Settodo={Settodo}
       todo={todo}
       AddTodo={AddTodo}

       />
    </div>
  )
}

export default App
