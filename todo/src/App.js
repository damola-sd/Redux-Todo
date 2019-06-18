import React from 'react';
import styled from 'styled-components';
import './App.css'
import Todos from './components/Todos';
import TodoForm from './components/TodoForm';


const StyledContainer = styled.div`
  padding: 10px;
  border: ipx inset red;
  width: auto;
  height: auto;
  
`;

function App() {
  return (
    <StyledContainer>
      <Todos />
      <TodoForm />
    </StyledContainer>

  );
}

export default App;
