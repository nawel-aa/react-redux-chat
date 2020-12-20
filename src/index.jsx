// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import promise from 'redux-promise-middleware';

// internal modules
import App from './components/app';
import '../assets/stylesheets/application.scss';
import channelListReducer from './reducers/channel_list_reducer';
import currentChannelReducer from './reducers/current_channel_reducer';
import messageListReducer from './reducers/message_list_reducer';
import currentUserReducer from './reducers/current_user_reducer';

// State and reducers
const reducers = combineReducers({
  channelList: channelListReducer,
  currentChannel: currentChannelReducer,
  messageList: messageListReducer,
  currentUser: currentUserReducer
});

// const username = window.prompt('What is your name?') || `anonymous${Math.floor(Math.random())}`;

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewares = composeEnhancers(applyMiddleware(promise));

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers, {}, middlewares)}>
    <App />
  </Provider>,
  document.getElementById('root')
);
