import React, { Component } from 'react';
import { Launcher } from 'react-chat-window';
import './Chat.css';

class Chat extends Component {
  state = {};

  constructor() {
    super();
    this.state = {
      messageList: [],
    };
  }

  _onMessageWasSent(message) {
    this.setState({
      messageList: [...this.state.messageList, message],
    });
  }

  _sendMessage(text) {
    if (text.length > 0) {
      this.setState({
        messageList: [
          ...this.state.messageList,
          {
            author: 'them',
            type: 'text',
            data: { text },
          },
        ],
      });
    }
  }

  render() {
    return (
      <div className="chat">
        <Launcher
          agentProfile={{
            teamName: 'Skybirds',
            imageUrl:
              'https://a.slack-edge.com/66f9/img/avatars-teams/ava_0001-34.png',
          }}
          onMessageWasSent={this._onMessageWasSent.bind(this)}
          messageList={this.state.messageList}
          showEmoji
        />
      </div>
    );
  }
}

export default Chat;
