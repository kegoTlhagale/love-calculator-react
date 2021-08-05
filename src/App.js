import './App.css'
import React , { useCallback, useEffect, useState } from 'react';

import { Calculate, Result } from "./components"


function App() {
  const [name, setName] = useState('');
  const [otherName, setOtherName] = useState('');
  const [result, setResult] = useState(0);
  const [message, setMessage] = useState('');
  const [display, setDisplay] = useState(false);

  const calculateLove = async (params) => {
    const url = 'http://localhost:2000/love-calculator/calculate'
    console.log('params', params)

    try {
      const response = await fetch(url, {
        //mode: 'no-cors',
        method: 'post',
        headers: {
          Accepts: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(params)
      })

      const jsonResponse = await response.json()
      return jsonResponse
    } catch (e){
      console.log('calculate error', e)
    }


  }

  const myInputChangeHandler = (event) => {
    event.target.value = event.target.value.replace(/[^a-zA-Z]/g, "");

    console.log('myInputChangeHandler')
    let inputName = event.target.name;
    let value = event.target.value;


    if (inputName === 'otherName')
      setOtherName(value)
    else
      setName(value);
  }

  const mySubmitHandler =async (event) => {
    console.log('mySubmitHandler')
    console.log('name', name)

    event.preventDefault();
    const requestParams = {
      name,
      otherName
    }

    console.log(requestParams)
    const response = await calculateLove(requestParams)
    setDisplay(true)

    if (response) {
      response.success ? setResult(response.percentage) : setMessage('Oops! An error occured while calculating')
    } else {
      setMessage('Oops! An error occured while calculating')
    }
    console.log('response', response)

  }

  return (
    <div className="main-container">
      <h1>Love Calculator</h1>

      <div className = "container">

        {!display ? (
        <Calculate
          onChange={myInputChangeHandler}
          onSubmit={mySubmitHandler}
        />)
        : (
        <Result
          name={name}
          otherName={otherName}
          result={result}
          errorMessage={message}
        />)}
      
      </div>
  
    </div>
  );
}

export default App;
