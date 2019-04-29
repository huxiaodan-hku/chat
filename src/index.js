import React from 'react';
import ReactDOM from 'react-dom';
import MessageListArea from './MessageListArea.js';
import MessageInputArea from './MessageInputArea.js';
import ChannelListArea from './ChannelListArea.js';
import UserInfoArea from './UserInfoArea.js'


import 'bootstrap/dist/css/bootstrap.css';
import {Row, Col} from 'react-bootstrap';

class Main extends React.Component{
  render(){
    return(

      <div>
        <Row>
          <Col md={2}>
            <UserInfoArea />
            <ChannelListArea />
          </Col>
          <Col>
            <MessageListArea />
            <MessageInputArea />
          </Col>
        </Row>
      </div>
    );
  }
}

ReactDOM.render(
  <Main />,
  document.getElementById('root')
);