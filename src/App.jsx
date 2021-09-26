import React, { useState } from "react";
import Input from './components/Input';
import Button from './components/Button';
import Container from './components/Container';
import Title from './components/Title';
import Error from './components/Error';

function App() {
  
  const [result, setResult] = useState(0);
  const [error, setError] = useState('');
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');

  function sumNum() {
    if (num1 === '' | num2 === '') {
      setError('Input Inválido!');
    }

    else {
      setError('');

      setResult(parseFloat(num1) + parseFloat(num2));
    }
  }

  function subNum() {
    if (num1 === '' | num2 === '') {
      setError('Input Inválido!');
    }

    else {
      setError('');

      setResult(parseFloat(num1) - parseFloat(num2));
    }
  }

  function multiNum() {
    if (num1 === '' | num2 === '') {
      setError('Input Inválido!');
    }

    else {
      setError('');

      setResult(parseFloat(num1) * parseFloat(num2));
    }
  }

  function divNum() {
    if (num1 === '' | num2 === '') {
      setError('Input Inválido!');
    }

    else if (num1 === '0' | num2 === '0') {
      setError('Impossível dividir por 0!');
    }

    else {
      setError('');

      setResult(parseFloat(num1) / parseFloat(num2));
    }
  }

  return (
    <React.Fragment>
      <Container>
        <Title>Calculadora Simples</Title>
        <Error>{error}</Error>
        <Input type='number' value={num1} onChange={(e) => setNum1(e.target.value)} placeholder='Primeiro Valor' />
        <Input type='number' value={num2} onChange={(e) => setNum2(e.target.value)} placeholder='Segundo Valor' />
        <Button onClick={sumNum}>+</Button>
        <Button onClick={subNum}>-</Button>
        <Button onClick={multiNum}>x</Button>
        <Button onClick={divNum}>%</Button>
        <Container>
        <p>Resultado: <strong>{result}</strong></p>
        </Container>
      </Container>
    </React.Fragment>  
  );
}

export default App;
