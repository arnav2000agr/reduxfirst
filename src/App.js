import React from 'react'
import "./App.css"
import {useSelector, useDispatch} from "react-redux";
import rootReducer from './reducers';
import {incNumber,decNumber} from "./actions/index"


const App = () => {
  const myState=useSelector((state)=>state.changeTheNumber);
  const dispatch= useDispatch();
  return (
    <>
      <div className="container">
        <h1>
          Inc/Dec
        </h1>
        <h2>Using Redux
        </h2>
        <div className="quantity">
          <a className="quantity__minus" title="Decrement" onClick={()=>dispatch(decNumber())}><span>-</span></a>
          <input name="quantity" type="text" className="quantity__input" value={myState}/>
          <a className="quantity__plus" title="increment" onClick={()=>dispatch(incNumber())}><span>+</span></a>

        </div>
      </div>
    </>
    
  )
}

export default App