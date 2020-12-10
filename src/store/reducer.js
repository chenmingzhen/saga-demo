const State = {
  first: 1,
  second: 2,
  isLoading:false
};

export const CHANGE_FIRST = "CHANGE_FIRST";
export const CHANGE_SECOND = "CHANGE_SECOND";
export const DELAY = "DELAY";
export const GETDATASTATE="GETDATASTATE"
export const REALGETDATA="REALGETDATA"

const DefaultReducer = (state = State, action) => {
  console.log(action.type)
  switch (action.type) {
    case CHANGE_FIRST:
    case CHANGE_SECOND:
    case DELAY:
    case REALGETDATA:
      return { ...state, ...action.payload,isLoading: false };
    case GETDATASTATE:
      return {...state,isLoading: true}
    default:
      return state;
  }
};

export default DefaultReducer;
