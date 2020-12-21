import { CREATE_MESSAGE, SET_MESSAGES, SET_CURRENT_CHANNEL } from '../actions';

const messageListReducer = (state = null, action) => {
  switch (action.type) {
    case `${SET_MESSAGES}_FULFILLED`:
      return action.payload.messages;
    case `${CREATE_MESSAGE}_FULFILLED`:
      state.push(action.payload);
      return state;
    case SET_CURRENT_CHANNEL:
      return [];
    default:
      return state;
  }
};

export default messageListReducer;
