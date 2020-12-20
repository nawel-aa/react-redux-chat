import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { setMessages } from '../actions';
import Message from '../components/message';

class ActiveChannel extends Component {
  componentWillMount() {
    this.props.setMessages();
  }

  render() {
    return (
      <div className="col-md-8">
        {this.props.messages.map((message) => {
          return (<Message
            author={message.author}
            content={message.content}
            createdAt={message.createdAt}
          />);
        })}
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { setMessages },
    dispatch
  );
}

function mapStateToProps(state) {
  return {
    messages: state.messageList
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ActiveChannel);
