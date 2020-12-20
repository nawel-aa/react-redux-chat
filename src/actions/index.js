export const SET_MESSAGES = 'SET_MESSAGES';
const fakeData = [
  {
    "author":"anonymous92",
    "content":"Hello world!",
    "created_at":"2017-09-26T23:03:16.365Z"
  },
  {
    "author":"anonymous77",
    "content":"My name is anonymous77",
    "created_at":"2017-09-26T23:03:21.194Z"
  }
];

export const setMessages = () => {
  const data = fetch('https://wagon-chat.herokuapp.com/general/messages')
    .then(response => response.json())
    .then(json => json.messages);

  return ({
    type: SET_MESSAGES,
    payload: data
  });
};
