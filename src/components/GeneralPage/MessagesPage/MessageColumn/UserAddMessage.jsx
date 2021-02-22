import React from "react";

class UserAddMessage extends React.Component {
  state = { msg_content: ""};

  render() {
    return (
      <div className="user-add-post">
        <h1>Write message</h1>
        <textarea
          name="userPost"
          onChange={(e) => this.setState({ msg_content: e.target.value })}
          value={this.state.msg_content}
          placeholder="Write your message"
        ></textarea>

        <button onClick={() => {
          this.props.handleClick(this.state.msg_content)
          this.setState({ msg_content:'' }) }}
          disabled={this.props.disableInput}
          >Send</button>
      </div>
    );
  }
}

export default UserAddMessage;
