import React from 'react';

const Message = (props) => {
  return (
    <div>
      <div className="row">
        <div className="col-auto">
          {props.author}
        </div>
        <div className="col">
          {props.createdAt}
        </div>
      </div>
      <p>{props.content}</p>
    </div>
  );
};

export default Message;
