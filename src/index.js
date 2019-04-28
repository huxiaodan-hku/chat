import React from 'react';
import ReactDOM from 'react-dom';
import './static/index.css';
import './MessageListArea.js'

class Main extends React.Component{
  render(){
    return(
      <div>
        <MessageListArea />
        <div className="shopping-list">
          <h1>Shopping List for asdfasdf</h1>
          <ul>
            <li>Instagram</li>
            <li>WhatsApp</li>
            <li>Oculus</li>
          </ul>
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <Main />,
  document.getElementById('root')
);