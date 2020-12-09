import { take, call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { CHANGE_FIRST, CHANGE_SECOND } from "../store/reducer";
import { store } from "../store/store";

const DATA = "DATA";

/**
 * 改变Store值
 */
export function changeFirstVal() {
  store.dispatch({ type: CHANGE_FIRST, payload: { first: Math.random() } });
}

export function changeSecondVal() {
  store.dispatch({ type: CHANGE_SECOND, payload: { second: Math.random() } });
}

export function triggerDelay() {
  store.dispatch(async (dispatch) => {
    const result = await new Promise((res) => {
      setTimeout(() => {
        res({ first: Math.random(), second: Math.random() });
      });
    });

    dispatch({ type: CHANGE_FIRST, payload: result });
  });
}


/**
 * Put指令 触发某一Action
 */
export function* putEffect() {
  yield put({
    type: CHANGE_FIRST,
    payload: { first: Math.random(), second: Math.random() },
  });
}

// 先点击对应的触发Text，然后点击改变Action，可以发现Take只执行一次，TakeEvery可以执行无数次

/**
 * Take指令 监听某一Action触发后 generator继续执行
 */
export function* takeEffect() {
  const result = yield take(CHANGE_FIRST);
  console.log(
    `Pre Action:${result.type},Value:${JSON.stringify(result.payload)}`
  );
}

/**
 * TakeEvery指令 启动后(run) 监听Action的触发 与take作用一致 区别在于Take只会执行一次，TakeEvery是无数次
 */
export function* takeEveryEffect() {
  yield takeEvery(
    CHANGE_FIRST,
    (data, action) => {
      console.log(data, action);
    },
    DATA
  );

  yield takeEvery(
    CHANGE_SECOND,
    (data, action) => {
      console.log(data, action);
    },
    DATA
  );
}

/**
 * Call指令，等待一个Promise的resolve 业务中用于
 */

export function* callEffect() {
  const result = yield call(() => {
    return Promise.resolve({
      first: Math.random(),
      second: Math.random(),
    });
    // or

    // return new Promise((res) => {
    //   setTimeout(() => {
    //     res({ first: Math.random(), second: Math.random() });
    //   }, 1000);
    // });
  });

  console.log(result);

  yield put({
    type: CHANGE_FIRST,
    payload: result,
  });
}

export function* takeLatestEffect() {
  yield takeLatest(
    CHANGE_FIRST,
    (data, action) => {
      console.log(data, action);
    },
    DATA
  );
}
