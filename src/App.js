import React from 'react';

import './App.css';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';

function App() {
  return (
    <div>
      <TodoTemplate>
        <TodoInsert />
      </TodoTemplate>
    </div>
  );
}

export default App;
