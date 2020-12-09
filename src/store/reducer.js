const State={
    first:1,
    second:2
}

export const CHANGE_FIRST=Symbol()
export const CHANGE_SECOND=Symbol()

const DefaultReducer=(state=State,action)=>{
    switch (action.type){
        case CHANGE_FIRST:
        case CHANGE_SECOND:
            return {...state,...action.payload}
        default:
            return state
    }
}

export default DefaultReducer