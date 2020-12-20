import { SET_MESSAGES } from '../actions';

const messageListReducer = (state, action) => {
  if (state === undefined) {
    return [];
  }

  switch (action.type) {
    case SET_MESSAGES:
      return action.payload;
    default:
      return state;
  }
};

export default messageListReducer;
