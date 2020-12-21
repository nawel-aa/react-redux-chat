import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { setCurrentChannel, setMessages } from '../actions';

class ChannelList extends Component {
  componentDidUpdate(prevProps) {
    if (prevProps.currentChannel !== this.props.currentChannel) {
      this.props.setMessages(this.props.currentChannel);
    }
  }

  handleClick = (event) => {
    this.props.setCurrentChannel(event.target.innerText);
  }

  render() {
    return (
      <div className="col-md-3">
        {this.props.channelList.map((channel) => {
          return (
            <p>
              <a href={`#${channel}`} onClick={this.handleClick} key={channel}>{channel}</a>
            </p>
          );
        })}
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ setCurrentChannel, setMessages }, dispatch);
}

function mapStateToProps(state) {
  return ({
    channelList: state.channelList,
    currentChannel: state.currentChannel
  });
}

export default connect(mapStateToProps, mapDispatchToProps)(ChannelList);
