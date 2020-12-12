import React, { Component } from 'react';
import { connect } from 'react-redux';

/* Import Components */
import Input from './components/Input';
import Select from './components/Select';
import Button from './components/Button';
import { addUser, getConnectionType } from '../../Redux/NewUser/newUserAction';

class FormContainer extends Component {
  state = {
    newUser: {
      name: '',
      gender: '',
      email: '',
      phone: '',
      connection_type: [],
      connection_type_string: '',
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
          // value={this.state.newUser.name}
          placeholder={'Введите Имя Фамилию'}
          onChange={this.handleInput}
        />
        <Select
          title="Пол"
          name="gender"
          placeholder="Выберете пол"
          options={this.state.gender_list}
          // value={this.state.newUser.gender}
          handleChange={this.handleInput}
        />
        <Select
          title="Способ связи"
          name="connection_type_string"
          placeholder="Выберите способ связи"
          options={this.props.connection_state}
          // value={this.state.newUser.connection_type_string}
          handleChange={this.handleInput}
        />
        <Input
          type="email"
          title="Email"
          name="email"
          placeholder="Введите свой E-mail"
          // value={this.state.newUser.email}
          onChange={this.handleInput}
        />
        <Input
          type="number"
          title="Phone number"
          name="phone"
          placeholder="Введите свой номер"
          // value={this.state.newUser.phone}
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
    connection_state: state.newUserReducer.connection_type,
  };
};

const mapDispatchToProps = {
  addUser,
  getConnectionType,
};

export default connect(mapStateToProps, mapDispatchToProps)(FormContainer);
