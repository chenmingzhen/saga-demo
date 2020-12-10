import React from "react";
import {action, sagaMiddleware} from "./store/store";
import {
    putEffect,
    takeEffect,
    takeEveryEffect,
    changeFirstVal,
    changeSecondVal,
    callEffect,
    takeLatestEffect,
    triggerDelay,
    SimulateAsync
} from "./saga/saga";
import {store} from "./store/store";
import {GETDATASTATE} from "./store/reducer";

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

                    点击触发GetData的Action
                    <button
                        onClick={() => {
                            store.dispatch({type:GETDATASTATE})
                        }}
                    >
                        GetData
                    </button>
                </div>

                <div
                    onClick={() => {
                        sagaMiddleware.run(putEffect);
                    }}
                >
                    点击触发PutEffect:
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

                <div
                    onClick={() => {
                        sagaMiddleware.run(SimulateAsync);
                    }}
                >
                    点击开启Saga run 操作获取数据:{JSON.stringify(this.state)}
                </div>
            </>
        );
    }
}

export default App;
