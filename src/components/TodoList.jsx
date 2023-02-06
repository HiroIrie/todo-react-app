import axios from 'axios';
import React from 'react';

function TodoList({ taskList, setTaskList }) {

  const handleDelete = (id) => {
    taskList.forEach(element => {
      if (element._id === id) {
        try {
          axios.delete(`/api/todos/${id}`)
          setTaskList(taskList.filter(task => task._id !== id));
        } catch (err) {
          window.alert('削除に失敗しました')
        }
      }
    });


  }

  const handleCompleted = (id) => {
    setTaskList(taskList.map(task => {
      if (task._id === id) {
        try {
          axios.request({
            method: 'patch',
            url: `api/todos/${id}`,
            data: {
              completed: !task.completed
            }
          });
        } catch (err) {
          alert('データの保存に失敗しました')
        }
        return {
          ...task, completed: !task.completed
        }
      };
      return task;
    }))
  }
  return (
    <div className='todoList'>
      <div className="todos">
        {taskList.map((task, index, id) => {
          return (
            <div className={`todo ${task.completed ? "completed" : ""}`} key={index}>
              <div className="todoText">
                <span>{task.todo}</span>
              </div>
              <div className="icons">
                <button onClick={() => handleCompleted(task._id)}><i className='fa fa-check'></i></button>
                <button onClick={() => handleDelete(task._id)}><i className='fa fa-trash'></i></button>
              </div>
            </div>
          )

        })}

      </div>
    </div>
  )
}

export default TodoList