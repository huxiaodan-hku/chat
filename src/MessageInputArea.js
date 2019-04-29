import React from 'react';
import RichEditorExample from "./RichEditorExample.js";
import "./static/MessageInputArea.css"
import {Button} from 'react-bootstrap';

class MessageInputArea extends React.Component{
	render(){
		return(
            <div className = "MessageInputArea">
                <RichEditorExample className = "editor"/>
    			<Button variant="info" className="float-right">发送</Button>
            	
            </div>
		);
	}

}

export default MessageInputArea;