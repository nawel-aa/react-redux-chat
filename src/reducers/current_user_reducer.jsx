export default function currentUserReducer(state, action) {
  if (state === undefined) {
    return 'Nawel';
  }

  switch (action.type) {
    default:
      return state;
  }
}
