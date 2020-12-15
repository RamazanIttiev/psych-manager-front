import React, { Component } from 'react';
import { connect } from 'react-redux';

/* Import Components */
import Input from '../UI/Input';
import Select from '../UI/Select';
import Button from '../UI/Button';
import { addUser, getConnectionType } from '../../Redux/NewUser/newUserAction';

class NewUserForm extends Component {
  state = {
    newUser: {
      name: '',
      gender: '',
      email: '',
      phone: '',
      connection_type: '',
    },
    gender_list: ['Мужской', 'Женский'],
  };

  componentDidMount() {
    this.props.getConnectionType();
  }

  handleInput = e => {
    let value = e.target.value;
    let name = e.target.name;
    this.setState(prevState => ({
      newUser: {
        ...prevState.newUser,
        [name]: value,
      },
    }));
    console.log(this.state);
  };

  handleFormSubmit = e => {
    e.preventDefault();
    this.props.addUser(this.state);
  };

  handleClearForm = e => {
    e.preventDefault();
  };

  render() {
    return (
      <form className="container-fluid" onSubmit={this.handleFormSubmit}>
        <Input
          type="text"
          title="Фамилия Имя"
          name="name"
          placeholder={'Введите Имя Фамилию'}
          onChange={this.handleInput}
        />
        <Select
          title="Пол"
          name="gender"
          placeholder="Выберете пол"
          options={this.state.gender_list}
          onChange={this.handleInput}
        />
        <Select
          title="Способ связи"
          name="connection_type"
          placeholder="Выберите способ связи"
          options={this.props.connection_type}
          onChange={this.handleInput}
        />
        <Input
          type="email"
          title="Email"
          name="email"
          placeholder="Введите свой E-mail"
          onChange={this.handleInput}
        />
        <Input
          type="number"
          title="Phone number"
          name="phone"
          placeholder="Введите свой номер"
          onChange={this.handleInput}
        />
        {/*Submit */}
        <Button
          action={this.handleFormSubmit}
          type="primary"
          title="Отправить"
          style={buttonStyle}
          disabled={this.props.isLoading}
        />
        {/* Clear the form */}
        <Button
          action={this.handleClearForm}
          type="secondary"
          title="Очистить"
          style={buttonStyle}
        />
      </form>
    );
  }
}

const buttonStyle = {
  margin: '10px 10px 10px 10px',
};

const mapStateToProps = state => {
  return {
    isLoading: state.newUserReducer.isLoading,
    connection_type: state.newUserReducer.connection_type,
    token: state.authReducer.token,
  };
};

const mapDispatchToProps = {
  addUser,
  getConnectionType,
};

export default connect(mapStateToProps, mapDispatchToProps)(NewUserForm);
