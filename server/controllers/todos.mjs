import Todo from '../models/todo.mjs';
import { validationResult } from 'express-validator';

//todo一覧を取得する関数
async function getAllTodos (req, res) {
    const todos = await Todo.find().sort({ "DATE": -1 });
    res.json(todos);  
}

//todoを追加する関数
async function registTodo (req, res) {
    const errors=validationResult(req);
    if(!errors.isEmpty()){
       const errs=errors.array();
      return res.status(400).json(errs);
    }
        const todo = new Todo(req.body);
        const newTodo = await todo.save();
        res.status(201).json(newTodo);   
}
    

//todoを削除する関数
async function deleteTodo (req, res) {
    const _id = req.params.id;
    const { deletedCount } = await Todo.deleteOne({ _id });
   if(deletedCount===0){return res.status(404).json({"msg":"Target Not Found"})}
   res.json({"msg":"Delete succeced"});
}

//todoを更新する関数
async function updateTodo(req,res){
   const {completed}=req.body;
   const _id=req.params.id;
   const todo=await Todo.findById(_id);
   if(todo===null)res.status(404).json({"msg":"Page Not Found"});
   if(todo.completed==completed)return;
   todo.completed=completed;
   await todo.save();
}

export{getAllTodos,registTodo,deleteTodo,updateTodo};