
import React, { useState, useEffect, useRef } from 'react';
import TodoList from './components/TodoList';
import { useTodoLayerValue } from './context/TodoContext';
import './App.css';
import axios from 'axios'; //Axios kütüphanesini import edip verileri çekebilmek için
const App = () => {
  const [{ todos }, dispatch] = useTodoLayerValue();  //dispatch is a function of the Redux store. You call store. This is the only way to trigger a state change. 
  const [content, setContent] = useState(''); //The useState() is a Hook that allows you to have state variables in functional components. React has two types of components, one is class components which are ES6 classes that extend from React and the other is functional components.
  axios.get('http://127.0.0.1:8000')
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
  var body = {
    firstName: 'testName',
    lastName: 'testLastName'
};

axios.post('http://127.0.0.1:8000', body)
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
  const inputRef = useRef(null);

  useEffect(() => {  //The useEffect Hook allows you to perform side effects in your components.
    inputRef.current.focus();
  }, []);

  const handleSubmit = (event) => {  //handleSubmit gets the current value of state
    event.preventDefault();

    if (content) {
      const newTodo = {
        id: Math.floor(Math.random() * 39399393),
        content,
        isCompleted: false,
      };

      dispatch({
        type: 'ADD_TODO',
        payload: newTodo,
      });

      setContent(''); //The setContent command replaces the document with a new one.
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="todo-form">
        <input
          type="text"
          value={content}
          className="todo-input"
          placeholder="What will you do?" //text to be displayed 
          ref={inputRef}
          onChange={(event) => setContent(event.target.value)}
        />

        <button className="todo-button">Add</button>
      </form>
      <TodoList todos={todos} />
    </div>
  );
};

export default App;