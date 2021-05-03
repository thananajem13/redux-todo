import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from './action'
import './app.css'
function App() {
  const counter = useSelector( state => state.counter)
  const isLogged = useSelector( state => state.isLogged)
  const dispatch = useDispatch()
  return (
    <div className="app">
      <h1>Counter</h1>
      <p>{counter}</p>
      <div className="btn">
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      </div>
      
      {isLogged ? <h3>He is loged</h3> : '' }
    </div>
  )
}

export default App
