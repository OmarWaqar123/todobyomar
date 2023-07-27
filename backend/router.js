const express = require("express")
const Todo = require("./Models/Todomodel")

const Request_Router = express.Router()

Request_Router.get("/all",async(req,res) => {
    const all_todos = await Todo.find()

    res.json(all_todos)
})

Request_Router.post("/new",(req,res) => {
    const todo = new Todo({
        text: req.body.text
    })
     todo.save()
     
    res.json(todo)
    
})

Request_Router.delete("/delete/:id", async(req,res) => {
    const result = await Todo.findByIdAndDelete(req.params.id)

    res.json(result)
})

Request_Router.put("/complete/:id", async(req,res)=>{
    const  todo = await Todo.findById(req.params.id)

    todo.completed = !todo.completed
    todo.save()

    res.json(todo)
})


module.exports = Request_Router