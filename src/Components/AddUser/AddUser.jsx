import React, { Component } from 'react';
import { connect } from 'react-redux';

/* Import Components */
import Input from '../UI/Input';
import Select from '../UI/Select';
import Button from '../UI/Button';
import { addUser, getConnectionType, getGender } from '../../Redux/NewUser/newUserAction';
import Header from '../Header/Header';
import SideBar from '../Sidebar/Sidebar';
import { Link, NavLink, Redirect } from 'react-router-dom';

class AddUser extends Component {
  state = {
    newUser: {
      name: '',
      gender: '',
      email: '',
      phone: '',
      connection_type: '',
    },
  };

  componentDidMount() {
    this.props.getConnectionType();
    this.props.getGender();
    console.log(this.props.current_user);
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
    this.props.addUser(this.state.newUser);
  };

  clearForm = e => {
    e.preventDefault();
    this.setState({
      newUser: {
        ...this.state.newUser,
        name: '',
        gender: '',
        email: '',
        phone: '',
        connection_type: '',
      },
    });
  };

  render() {
    return (
      <>
        <Header />
        <SideBar />
        <div class="content-wrapper">
          <div className="card">
            <NavLink to="/clients" style={position}>
              <button type="button" class="btn btn-outline-primary">
                <i class="fas fa-chevron-left"></i>
              </button>
            </NavLink>
            <form className="container-fluid" style={position} onSubmit={this.handleFormSubmit}>
              <Input
                type="text"
                title="Фамилия Имя"
                name="name"
                value={this.props.current_user.name}
                placeholder={'Введите ваше имя'}
                onChange={this.handleInput}
              />
              <Select
                title="Пол"
                name="gender"
                placeholder="Выберете пол"
                value={this.props.current_user.gender}
                options={this.props.gender}
                onChange={this.handleInput}
              />
              <Select
                title="Способ связи"
                name="connection_type"
                placeholder="Выберите способ связи"
                value={this.props.current_user.connection_type}
                options={this.props.connection_type}
                onChange={this.handleInput}
              />
              <Input
                type="email"
                title="Email"
                name="email"
                placeholder="Введите свой E-mail"
                value={this.props.current_user.email}
                onChange={this.handleInput}
              />
              <Input
                type="text"
                title="Phone number"
                name="phone"
                placeholder="Введите свой номер"
                value={this.props.current_user.phone}
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
                action={this.clearForm}
                type="secondary"
                title="Очистить"
                style={buttonStyle}
              />
            </form>
          </div>
        </div>
      </>
    );
  }
}

const buttonStyle = {
  margin: '10px 10px 10px 10px',
};

const position = {
  width: '40%',
  marginLeft: '15px',
  marginTop: '20px',
};

const mapStateToProps = state => {
  return {
    isLoading: state.newUserReducer.isLoading,
    isUserAdded: state.newUserReducer.isUserAdded,
    connection_type: state.newUserReducer.connection_type,
    gender: state.newUserReducer.gender,
    current_user: state.newUserReducer.current_user,
  };
};

const mapDispatchToProps = {
  addUser,
  getConnectionType,
  getGender,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddUser);
