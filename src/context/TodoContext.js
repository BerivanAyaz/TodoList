import React, { createContext, useContext, useReducer } from 'react';

export const TodoLayerContext = createContext();

export const TodoLayer = ({ initialState, reducer, children }) => (
  <TodoLayerContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </TodoLayerContext.Provider>
);
//React context, sahne kullanmadan React uygulamamızda ihtiyaç duyduğumuz herhangi bir bileşendeki verileri aktarmamıza ve kullanmamıza (tüketmemize) olanak tanır.
export const useTodoLayerValue = () => useContext(TodoLayerContext);