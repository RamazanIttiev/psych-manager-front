import React, { Component } from 'react';
import { connect } from 'react-redux';

/* Import Components */
import Input from './components/Input';
import Select from './components/Select';
import Button from './components/Button';
import { addNewClient, connection_type } from '../../Redux/NewClient/newClientAction';

class FormContainer extends Component {
  state = {
    newUser: {
      name: '',
      gender: '',
      email: '',
      phone: '',
      connection_type: [this.props.connection_type],
    },

    gender_list: ['Male', 'Female', 'Others'],
  };

  componentDidMount() {
    this.props.connection_type();
  }
  handleFullName = e => {
    let value = e.target.value;
    this.setState(prevState => ({
      newUser: {
        ...prevState.newUser,
        name: value,
      },
    }));
  };

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
    console.log(this.props.connection_type);
  };

  handleClearForm = e => {
    e.preventDefault();
    this.setState({
      newUser: {
        name: '',
        age: '',
        gender: '',
        skills: [],
        about: '',
      },
    });
  };

  render() {
    return (
      <form className="container-fluid" onSubmit={this.handleFormSubmit}>
        <Input
          type={'text'}
          title={'Фамилия Имя'}
          name={'name'}
          value={this.state.newUser.name}
          placeholder={'Введите Имя Фамилию'}
          onChange={this.handleFullName}
        />
        <Select
          title={'Пол'}
          name={'gender'}
          placeholder={'Выберете пол'}
          options={this.state.gender_list}
          value={this.state.newUser.gender}
          handleChange={this.handleInput}
        />
        <Select
          title={'Способ связи'}
          name={'connection_type'}
          placeholder={'Выберите способ связи'}
          key={this.state.newUser.connection_type.id}
          options={this.state.newUser.connection_type}
          value={this.state.newUser.connection_type}
          handleChange={this.handleInput}
        />
        <Input
          type={'email'}
          title={'Email'}
          name="email"
          placeholder={'Введите свой E-mail'}
          value={this.state.newUser.email}
          onChange={this.handleInput}
        />
        <Input
          type={'number'}
          title={'Phone number'}
          name={'phone'}
          placeholder={'Введите свой номер'}
          value={this.state.newUser.phone}
          onChange={this.handleInput}
        />
        {/*Submit */}
        <Button
          action={this.handleFormSubmit}
          type={'primary'}
          title={'Отправить'}
          style={buttonStyle}
          disabled={this.props.isLoading}
        />
        {/* Clear the form */}
        <Button
          action={this.handleClearForm}
          type={'secondary'}
          title={'Очистить'}
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
    isLoading: state.newClientReducer.isLoading,
    connection_type: state.newClientReducer.connection_type,
  };
};

const mapDispatchToProps = {
  addNewClient,
  connection_type,
};

export default connect(mapStateToProps, mapDispatchToProps)(FormContainer);
