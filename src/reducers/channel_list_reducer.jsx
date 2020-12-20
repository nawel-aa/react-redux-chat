export default function channelListReducer(state, action) {
  if (state === undefined) {
    return ['general', 'help', 'montreal'];
  }

  switch (action.type) {
    default:
      return state;
  }
}
