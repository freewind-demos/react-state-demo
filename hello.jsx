import React,{Component} from 'react';

class Hello extends Component {
	constructor(props) {
		// required if we want to invoke `this.`
		super(props); 
		this.state = {
			// this is required, 
			// otherwise we will get an warning like
			// Warning: Hello is changing an uncontrolled input of type text to be controlled. Input elements should not switch from uncontrolled to controlled (or vice versa). Decide between using a controlled or uncontrolled input element for the lifetime of the component.
			username: '' 
		};
	}
	render() {
		return <div>
		  <h1>Hello {this.state.username}</h1>
		  <input type="text" 
		    value={this.state.username} 
		    onChange={this.handleNewUsername.bind(this)}
		    />
		</div>;
	}
	handleNewUsername(event) {
		const newUsername = event.target.value;
		this.setState({username: newUsername});
	}
}

export default Hello;