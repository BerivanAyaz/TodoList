import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { TodoLayer } from './context/TodoContext';
import reducer, { initialState } from './context/reducer';

ReactDOM.render(
  <React.StrictMode>
    <TodoLayer initialState={initialState} reducer={reducer}>
      <App />
    </TodoLayer>
  </React.StrictMode>,
  document.getElementById('root')
);
//React, render() adlı bir işlevi kullanarak HTML'yi web sayfasına işler. İşlevin amacı, belirtilen HTML kodunu belirtilen HTML öğesi içinde görüntülemektir.
// render() yönteminde, props ve state okuyabilir ve JSX kodumuzu uygulamamızın kök bileşenine döndürebiliriz.
//ReactDOM, web sayfasının DOM öğelerini verimli bir şekilde yönetmenin bir yolunu sağlamak için bir web uygulamasının en üst düzeyinde kullanılabilecek DOM'ye özel yöntemler sağlayan bir pakettir.