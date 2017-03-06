import { INCREMENT_PRODUCE, DECREMENT_PRODUCE, ALL_PRODUCE } from '../actions/types';

let initialState = {
  produce: 0
};

export default (state = initialState.produce, action) => {
  switch(action.type) {
    case INCREMENT_PRODUCE:
      return state + 1;
    case DECREMENT_PRODUCE:
      return state - 1;
    case ALL_PRODUCE:
      return state + action.payload;
    default:
      return state;
  }
}