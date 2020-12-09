import React from "react";
import { action, sagaMiddleware } from "./store/store";
import {
  putEffect,
  takeEffect,
  takeEveryEffect,
  changeFirstVal,
  changeSecondVal,
  callEffect,
  takeLatestEffect,
  triggerDelay,
} from "./saga/saga";
import { store } from "./store/store";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    store.subscribe(() => {
      this.setState(store.getState());
    });
  }

  render() {
    return (
      <>
        <div>
          点击改变Store First值:
          <button
            onClick={() => {
              changeFirstVal();
            }}
          >
            First
          </button>
          点击改变Store Second值:
          <button
            onClick={() => {
              changeSecondVal();
            }}
          >
            Second
          </button>
          点击触发Delay的Action
          <button
            onClick={() => {
              triggerDelay();
            }}
          >
            Delay
          </button>
        </div>

        <div
          onClick={() => {
            sagaMiddleware.run(putEffect);
          }}
        >
          点击触发PutEffect<span onClick={() => {}}></span> :
          {JSON.stringify(this.state)}
        </div>

        <div
          onClick={() => {
            sagaMiddleware.run(takeEffect);
          }}
        >
          点击触发TakeEffect:{JSON.stringify(this.state)}
        </div>

        <div
          onClick={() => {
            sagaMiddleware.run(takeEveryEffect);
          }}
        >
          点击触发TakeEveryEffect:{JSON.stringify(this.state)}
        </div>

        <div
          onClick={() => {
            sagaMiddleware.run(callEffect);
          }}
        >
          点击触发CallEffect:{JSON.stringify(this.state)}
        </div>

        <div
          onClick={() => {
            sagaMiddleware.run(takeLatestEffect);
          }}
        >
          点击触发TakeLatestEffect:{JSON.stringify(this.state)}
        </div>
      </>
    );
  }
}

export default App;
