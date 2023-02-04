import {Schema,model} from 'mongoose';
const todoSchema=Schema({
  todo:{
    type:String,
    required:true
  },
  completed:{
    type:Boolean,
    default:false
  }
});

const Todo=model('Todo',todoSchema);

export default Todo;