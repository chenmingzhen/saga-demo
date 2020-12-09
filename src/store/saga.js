import {take,call} from "redux-saga/effects"
import {CHANGE_FIRST,CHANGE_SECOND} from "./reducer"
export function *changeVal(){
    console.log("changeVal")

    const result=yield take(CHANGE_FIRST)
    console.log(result)
}