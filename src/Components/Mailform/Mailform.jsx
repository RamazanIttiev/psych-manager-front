import React, { Component } from 'react';
// import emailjs from 'emailjs';
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
  // sendMail = () => {
  //   var template_params = {
  //     name: this.state.name,
  //     email: this.state.email,
  //     phone: this.state.phone,
  //     message: this.state.message,
  //   };

  //   var service_id = 'mail.ru';
  //   var template_id = 'template_2b3rg1z';
  //   emailjs.send(service_id, template_id, template_params, 'user_VIvvxLyN9b2TXLcKkbCOI').then(
  //     function (response) {
  //       alert('SUCCESS!');
  //     },
  //     function (err) {
  //       console.log('FAILED...', err);
  //     },
  //   );
  // };
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
        {/* <button type="submit" onClick={this.sendMail}>
          Send Email
        </button> */}
      </div>
    );
  }
}
export default Form;
