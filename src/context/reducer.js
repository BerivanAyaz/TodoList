export const initialState = {
    todos: [],
  };
  //The reducer is a pure function that accepts 2 parameters: the current state and an action object. 
  const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
      case 'ADD_TODO':
        return {
          ...state,
          todos: [action.payload, ...state.todos],
        };
      case 'REMOVE_TODO':
        return {
          ...state,
          todos: [...state.todos].filter((todo) => todo.id !== action.payload),
        };
      case 'UPDATE_TODO':
        return {
          ...state,
          todos: state.todos.map((todo) => {
            if (todo.id !== action.payload.todoId) {
              return todo;
            }
  
            return {
              ...todo,
              content: action.payload.newValue,
            };
          }),
        };
      case 'COMPLETE_TODO':
        return {
          ...state,
          todos: state.todos.map((todo) => {
            if (todo.id !== action.payload) {
              return todo;
            }
  
            return {
              ...todo,
              isCompleted: !todo.isCompleted,
            };
          }),
        };
  
      default:
        return state;
    }
  };
  
  export default reducer;
