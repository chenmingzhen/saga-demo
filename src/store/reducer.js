const State = {
  first: 1,
  second: 2,
};

export const CHANGE_FIRST = "CHANGE_FIRST";
export const CHANGE_SECOND = "CHANGE_SECOND";
export const DELAY = "DELAY";

const DefaultReducer = (state = State, action) => {
  switch (action.type) {
    case CHANGE_FIRST:
    case CHANGE_SECOND:
      return { ...state, ...action.payload };
    case DELAY:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default DefaultReducer;
