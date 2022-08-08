import React, { useState, useEffect, useRef } from 'react';
import "./TodoForm.scss";

function TodoForm(props) {
  //set input to empty string when component mounts
  const [input, setInput] = useState('');

  const inputRef = useRef(null);

  //useEffect to focus on input when component mounts and when component unmounts
  useEffect(() => {
    inputRef.current.focus();
  });
  
//Sets targer value to input value
  const handleChange = e => {
    setInput(e.target.value);
  };

  const handleSubmit = e => {
    //prevents the page from reloading
    e.preventDefault();

    props.onSubmit({
      //Generates a random id for each todo
      id: Math.floor(Math.random() * 10000),
      text: input
    });
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit} className='todo-form'>
   <>
          <input
            placeholder='Add a todo'
            value={input}
            onChange={handleChange}
            name='text'
            className='todo-input'
            ref={inputRef}
          />
          <button onClick={handleSubmit} className='todo-button'>
            Add todo
          </button>
        </>
    </form>
  );
}

export default TodoForm;
