import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { createMessage, setMessages } from '../actions';

class MessageForm extends Component {
  constructor(props) {
    super(props);

    this.state = { currentMessage: '' };
  }

  componentDidMount() {
    this.messageBox.focus();
  }

  handleSubmit = (event) => {
    event.preventDefault();

    this.props.createMessage(this.props.channel, this.props.author, this.state.currentMessage);

    this.setState({ currentMessage: '' });
  }

  handleChange = (event) => {
    this.setState({ currentMessage: event.target.value });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input id="message" type="text" onChange={this.handleChange} value={this.state.currentMessage} ref={(input) => { this.messageBox = input; }} />
        </form>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ createMessage, setMessages }, dispatch);
}

function mapStateToProps(state) {
  return {
    channel: state.currentChannel,
    author: state.currentUser
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageForm);
