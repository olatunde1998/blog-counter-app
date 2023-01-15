// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

function App() {
 const [count, setCount] = useState(0);

  function increment() {
    setCount(Number(count) + 1)
  }
  function decrement() {
    setCount(Number(count) - 1)
  }
  function reset() {
    setCount(0)
  }

  return (
    <div>
      <section className="heading-logo">
        <img
          className="altschool-logo"
          src="https://play-lh.googleusercontent.com/dRGIUxAXNG9IXzHz9rCMBBvb-M3uiQ5Z5NXoV52T2vkI9-THHsr4og6kx2atiP3MleE=w526-h296-rw"
          alt=""
        />
      </section>
      <div className="container">
      <h1 className="counting-heading">Counting App</h1>
      <h1>{count}</h1>
      <button className="increase" onClick={increment}>
        +
      </button>
      <button className="decrease" onClick={decrement}>
        -
      </button>
      <button className="reset" onClick={reset}>
        Reset
      </button>
    </div>
    </div>
  )
}

export default App;