import React from 'react';
import ActiveChannel from '../containers/active_channel';
import ChannelList from '../containers/channel_list';

const App = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-1">Logo</div>
        <ChannelList />
        <ActiveChannel />
      </div>
    </div>
  );
};

export default App;
