import React, { useState } from 'react';
import clsx from 'clsx';
import { GrFormClose, GrFormEdit, GrFormCheckmark } from 'react-icons/gr';
import { useTodoLayerValue } from '../context/TodoContext';
const Todo = ({ todo }) => {
  const [{}, dispatch] = useTodoLayerValue(); //dispatch is a function of the Redux store. You call store. This is the only way to trigger a state change. 
  const [editable, setEditable] = useState(false);
  const [content, setContent] = useState(todo.content); //const, değişkenin yeniden atanmayacağına dair bir sinyaldir. let değişkenin yeniden atanabileceğinin bir işaretidir.
//The useState() is a Hook that allows you to have state variables in functional components. React has two types of components, one is class components which are ES6 classes that extend from React and the other is functional components.
  const completeTodo = (todoId) => {
    dispatch({
      type: 'COMPLETE_TODO',
      payload: todoId,
    });
  };
  const removeTodo = (todoId) => {
    dispatch({
      type: 'REMOVE_TODO',
      payload: todoId,
    });
  };

  const updateTodo = ({ todoId, newValue }) => {
    dispatch({
      type: 'UPDATE_TODO',
      payload: {
        todoId,
        newValue,
      },
    });
  };

  const todoStyle = clsx({
    ['todo-row']: true,
    ['completed']: todo.isCompleted,
  });

  return (
    <div className={todoStyle}>
      <div onClick={() => (editable ? '' : completeTodo(todo.id))}>
        {editable ? (
          <input
            type="text"
            value={content}
            className="todo-input-edit"
            onChange={(event) => setContent(event.target.value)}
          />
        ) : (
          todo.content
        )}
      </div>
      <div className="todo-icons">
        <GrFormClose
          className="todo-icon"
          onClick={() => removeTodo(todo.id)}
        />
        {editable ? (
          <GrFormCheckmark
            className="todo-icon"
            onClick={() => {
              updateTodo({ todoId: todo.id, newValue: content });
              setEditable(false);
              setContent('');
            }}
          />
        ) : (
          <GrFormEdit className="todo-icon" onClick={() => setEditable(true)} />
        )}
      </div>
    </div>
  );
};

export default Todo;