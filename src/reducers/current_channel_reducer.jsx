export default function currentChannelReducer(state, action) {
  if (state === undefined) {
    return 'general';
  }

  switch (action.type) {
    default:
      return state;
  }
}
