import React from 'react';
import { useState,useEffect } from 'react';
import axios from 'axios';



 function InputForm({ taskList, setTaskList }) { 
    const [inputText, setInputText] = useState('');
    
    useEffect(()=>{
         axios.get('/api/todos').then(todos=>{setTaskList(todos.data)});    
    },[])

    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            axios.request({
            method: "post",
            url: "api/todos",
            data: {
                todo:inputText
            }
        });
        setTaskList([
            ...taskList, {
                todo: inputText,
                completed: false
            }
        ]);
        setInputText('');
    } catch (err) {
        this.alert('データの保存に失敗しました');
    }
        
    }
    const handleChange = (e) => {
        setInputText(e.target.value);
    }
    return (
        <div className="inputForm">
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={handleChange} value={inputText} />
                <button>
                    <i className="fas fa-plus-square "></i>
                </button>
            </form>

        </div>
    )
}

export default InputForm