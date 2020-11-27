import React, { Component } from 'react';

/* Import Components */
import CheckBox from './components/CheckBox';
import Input from './components/Input';
import TextArea from './components/TextArea';
import Select from './components/Select';
import Button from './components/Button';

class FormContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newUser: {
        name: '',
        age: '',
        gender: '',
        skills: [],
        about: '',
      },

      genderOptions: ['Male', 'Female', 'Others'],
      skillOptions: ['Телефон', 'E-mail', 'WhatsApp', 'Telegram'],
    };
    // this.handleTextArea = this.handleTextArea.bind(this);
    // this.handleAge = this.handleAge.bind(this);
    // this.handleFullName = this.handleFullName.bind(this);
    // this.handleFormSubmit = this.handleFormSubmit.bind(this);
    // this.handleClearForm = this.handleClearForm.bind(this);
    // this.handleCheckBox = this.handleCheckBox.bind(this);
    // this.handleInput = this.handleInput.bind(this);
  }

  /* This lifecycle hook gets executed when the component mounts */

  handleFullName = e => {
    let value = e.target.value;
    this.setState(prevState => ({
      newUser: {
        ...prevState.newUser,
        name: value,
      },
    }));
  };

  handleAge = e => {
    let value = e.target.value;
    this.setState(prevState => ({
      newUser: {
        ...prevState.newUser,
        age: value,
      },
    }));
  };

  // Почему name в []?

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

  handleTextArea = e => {
    let value = e.target.value;
    this.setState(prevState => ({
      newUser: {
        ...prevState.newUser,
        about: value,
      },
    }));
  };

  // Разобрать данный метод

  handleCheckBox = e => {
    const newSelection = e.target.value;
    let newSelectionArray;

    if (this.state.newUser.skills.indexOf(newSelection) > -1) {
      newSelectionArray = this.state.newUser.skills.filter(s => s !== newSelection);
    } else {
      newSelectionArray = [...this.state.newUser.skills, newSelection];
    }

    this.setState(prevState => ({
      newUser: { ...prevState.newUser, skills: newSelectionArray },
    }));
  };

  handleFormSubmit = e => {
    e.preventDefault();
    let userData = this.state.newUser;

    fetch('http://example.com', {
      method: 'POST',
      body: JSON.stringify(userData),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    }).then(response => {
      response.json().then(data => {
        console.log('Successful' + data);
      });
    });
    console.log(this.state);
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
        />{' '}
        {/* Name of the user */}
        <Input
          type={'number'}
          name={'age'}
          title={'Возраст'}
          value={this.state.newUser.age}
          placeholder={'Выберете Ваш возраст'}
          onChange={this.handleAge}
        />{' '}
        {/* Age */}
        <Select
          title={'Пол'}
          name={'gender'}
          options={this.state.genderOptions}
          value={this.state.newUser.gender}
          placeholder={'Выберете пол'}
          handleChange={this.handleInput}
        />{' '}
        {/* Age Selection */}
        <CheckBox
          title={'Способ связи'}
          name={'skills'}
          options={this.state.skillOptions}
          selectedOptions={this.state.newUser.skills}
          handleChange={this.handleCheckBox}
        />{' '}
        {/* Skill */}
        <TextArea
          title={'Номер телефона/E-mail'}
          rows={2}
          value={this.state.newUser.about}
          name={'currentPetInfo'}
          handleChange={this.handleTextArea}
          placeholder={'Введите номер телефона/E-mail'}
        />
        {/* About you */}
        <Button
          action={this.handleFormSubmit}
          type={'primary'}
          title={'Отправить'}
          style={buttonStyle}
        />{' '}
        {/*Submit */}
        <Button
          action={this.handleClearForm}
          type={'secondary'}
          title={'Очистить'}
          style={buttonStyle}
        />{' '}
        {/* Clear the form */}
      </form>
    );
  }
}

const buttonStyle = {
  margin: '10px 10px 10px 10px',
};

export default FormContainer;
