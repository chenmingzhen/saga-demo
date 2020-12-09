import React from 'react'
import {action,sagaMiddleware} from "./store/store";
import {changeVal} from "./store/saga"
import {take,put,call} from "redux-saga/effects"

function App() {

  return (
    <div className="App" onClick={()=>{sagaMiddleware.run(changeVal)}}>
        click me
    </div>
  );
}

export default App;
