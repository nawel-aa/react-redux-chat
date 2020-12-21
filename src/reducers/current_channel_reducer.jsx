import { SET_CURRENT_CHANNEL } from '../actions';

export default function currentChannelReducer(state = null, action) {
  switch (action.type) {
    case SET_CURRENT_CHANNEL:
      return action.payload;
    default:
      return state;
  }
}
