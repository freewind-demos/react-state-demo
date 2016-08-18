import React, {Component} from 'react';

class Hello extends Component {
  constructor(props) {
    // required if we want to invoke `this.`
    super(props);
    this.state = {
      username: ''
    };
  }

  render() {
    return <div>
      <h1>Hello {this.state.username}</h1>
      <input type="text"
             onChange={this.handleNewUsername.bind(this)}
      />
    </div>;
  }

  handleNewUsername(event) {
    this.setState({username: event.target.value});
  }
}

export default Hello;