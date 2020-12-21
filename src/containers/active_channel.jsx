import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { setMessages } from '../actions';
import Message from '../components/message';
import MessageForm from '../containers/message_form';


class ActiveChannel extends Component {
  componentDidMount() {
    const callMessagesAPI = () => this.props.setMessages(this.props.channel);
    callMessagesAPI();
    this.refresh = setInterval(callMessagesAPI, 2000);
  }

  componentDidUpdate() {
    this.list.scrollTop = this.list.scrollHeight;
  }

  componentWillUnmount() {
    clearInterval(this.refresh);
  }

  render() {
    return (
      <div className="col-md-8" >
        <h1>{this.props.channel}</h1>
        <div ref={(list) => { this.list = list; }}>
          {this.props.messages.map((message) => {
            return (<Message
              author={message.author}
              content={message.content}
              createdAt={message.created_at}
              key={message.id}
            />);
          })}
        </div>
        <div>
          <MessageForm />
        </div>
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
    messages: state.messageList,
    channel: state.currentChannel
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ActiveChannel);
