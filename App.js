import './App.css';
import React, { useRef, useState } from 'react'
function App() {
  return (
    <div className='App'>
      <h1>HOC</h1>
      <HOCRed cmp={Counter} />
      <HOCYellow cmp={Counter} />
      <HOCGreen cmp={Counter} />
      <HOCBlue cmp={Counter} />
    </div>
  );
}

function HOCRed(props) {
  return <h2 style={{ backgroundColor: 'red', width: 75 }}>Red<props.cmp /></h2>
}

function HOCYellow(props) {
  return <h2 style={{ backgroundColor: 'yellow', width: 75}}>Yellow<props.cmp /></h2>
}

function HOCGreen(props) {
  return <h2 style={{ backgroundColor: 'green', width: 75}}>Green<props.cmp /></h2>
}

function HOCBlue(props) {
  return <h2 style={{ backgroundColor: 'blue', width: 75}}>Blue<props.cmp /></h2>
}

function Counter() {
  const [count, setCount] = useState(0)
  return <div>
    <h1>{count} </h1>
    <button onClick={() => setCount(count + 1)} >Update</button>
  </div>

}

export default App;
