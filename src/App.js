import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';

// Components
import Phrase from './components/Phrase';
import Brand from './components/Brand';

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;

`;

const Button = styled.button`
  background-image: -webkit-linear-gradient(top left, #007d35 0%, #007d35 40%, #0f574e 100%);
  background-size: 300px; 
  font-family: Arial, Helvetica, sans-serif;
  color: #fff;
  margin-top: 3rem;
  padding: 1rem 3rem;
  font-size: 2rem;
  border: 2px solid #000;
  transition: background-size .8s ease;

  &:focus { 
    outline: none;
  }

  &:hover { 
    cursor: pointer;
    background-size: 400px;
  }
`;

function App() {
  // phrase state
  const [phrase, savePhrase] = useState({});

  const consultApi = async () => {
    try {
      const api = await fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes');
      const phrase = await api.json();
      savePhrase(phrase[0]);
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    consultApi();
  }, []);

  return (
    <Content>
      <Brand />
      <Phrase phrase={phrase} />
      <Button onClick={consultApi}>Get Phrase</Button>
    </Content >
  );
}

export default App;
