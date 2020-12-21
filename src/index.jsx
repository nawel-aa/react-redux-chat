// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import promise from 'redux-promise-middleware';

// internal modules
import App from './components/app';
import '../assets/stylesheets/application.scss';
import currentChannelReducer from './reducers/current_channel_reducer';
import messageListReducer from './reducers/message_list_reducer';

// State and reducers
const identityReducer = (state = null) => state;

const reducers = combineReducers({
  channelList: identityReducer,
  currentChannel: currentChannelReducer,
  messageList: messageListReducer,
  currentUser: identityReducer
});


const initialState = {
  channelList: ['general', 'help', 'montreal'],
  currentChannel: 'general',
  messageList: [],
  currentUser: window.prompt('What is your name?') || `anonymous${Math.floor(Math.random())}`
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewares = composeEnhancers(applyMiddleware(promise));
const store = createStore(reducers, initialState, middlewares);

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
