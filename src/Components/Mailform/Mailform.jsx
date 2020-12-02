import React, { Component } from 'react';
import './Mailform.css';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      phone: '',
      message: '',
    };
  }

  handleChangeName = event => {
    this.setState({
      name: event.target.value,
    });
  };
  handleChangeEmail = event => {
    this.setState({
      email: event.target.value,
    });
  };
  handleChangePhone = event => {
    this.setState({
      phone: event.target.value,
    });
  };
  handleChangeMessage = event => {
    this.setState({
      message: event.target.value,
    });
  };

  render() {
    return (
      <div className="form">
        <form>
          {' '}
          Name:
          <input type="text" name="name" onChange={this.handleChangeName} />
        </form>
        <form>
          Email:
          <input type="text" name="email" ref="email" onChange={this.handleChangeEmail} />
        </form>
        <form>
          Phone:
          <input type="number" name="phone" ref="phone" onChange={this.handleChangePhone} />
        </form>
        <form>
          Message:
          <input type="textarea" name="message" ref="message" onChange={this.handleChangeMessage} />
        </form>
      </div>
    );
  }
}
export default Form;
