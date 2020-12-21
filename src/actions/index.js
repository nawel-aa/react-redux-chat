export const SET_MESSAGES = 'SET_MESSAGES';
export const CREATE_MESSAGE = 'CREATE_MESSAGE';
export const SET_CURRENT_CHANNEL = 'SET_CURRENT_CHANNEL';

export const setMessages = (channel) => {
  const data = fetch(`https://wagon-chat.herokuapp.com/${channel}/messages`)
    .then(response => response.json());

  return ({
    type: SET_MESSAGES,
    payload: data
  });
};

export const createMessage = (channel, author, content) => {
  const body = { author, content };
  const promise = fetch(`https://wagon-chat.herokuapp.com/${channel}/messages`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  }).then(response => response.json());

  return ({
    type: CREATE_MESSAGE,
    payload: promise
  });
};

export const setCurrentChannel = (channel) => {
  return ({
    type: SET_CURRENT_CHANNEL,
    payload: channel
  });
};
