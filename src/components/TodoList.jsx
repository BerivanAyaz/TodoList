import React from 'react';
import Todo from './Todo';

const TodoList = ({ todos }) => {
  return (
    <div className="todo-list">
      {todos && todos.map((todo) => <Todo key={todo.id} todo={todo} />)}
    </div>
  );
};
//Temel bir kural da, map() çağrısının içindeki elemanların anahtarlara ihtiyaç duymasıdır.
//Anahtarlar; hangi öğelerin değiştiğini, eklendiğini ya da silindiğini belirleme noktasında React’e yardımcı olur.
export default TodoList;
