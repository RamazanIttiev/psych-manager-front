import React, { Component } from 'react';
import Header from '../Header/Header';
import { Container } from './Container';
import './App.css';
import Sidebar from '../Sidebar/Sidebar';
import { connect } from 'react-redux';
import { addUser, getUsers, getConnectionType } from '../../Redux/NewUser/newUserAction';
import Input from '../UI/Input';
import Select from '../UI/Select';

class Clients extends Component {
  state = {
    filters: {
      pagination: {
        page: 1,
        limit: 15,
      },
      sort: {
        field: 'created_at',
        order: 0,
      },
      fields: {
        id: '',
        name: '',
        email: '',
        phone: '',
        connection_type: '',
        session_date: '',
      },
    },
  };

  onSubmit = event => {
    event.preventDefault(event);
  };

  componentDidMount() {
    this.props.getUsers(this.state);
    this.props.getConnectionType();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.filters.fields != prevState.filters.fields) {
      this.props.getUsers(this.state);
    }
  }

  showModal = () => {
    this.setState({ isShown: true }, () => {
      this.closeButton.focus();
    });
    this.toggleScrollLock();
  };

  handleInput = e => {
    let value = e.target.value;
    let name = e.target.name;
    this.setState({
      filters: {
        fields: {
          ...this.state.filters.fields,
          [name]: value,
        },
      },
    });
    this.props.getUsers(this.state);
  };

  render() {
    console.log('a');
    return (
      <>
        <Header />
        <Sidebar />
        <div class="content-wrapper">
          <div className="card card-light">
            <div className="card-body">
              <div className="card-header">
                <h3>Завести нового клиента</h3>
              </div>
              <div>
                <br />
                <Container triggerText={this.triggerText} onSubmit={this.onSubmit} />
              </div>
            </div>
          </div>
          {/* Таблица с данными о клиенте */}
          <div className="card">
            <div className="card-header">
              <h3>Таблица с данными о клиентах</h3>
            </div>
            <div className="card-body">
              <table className="table table-bordered table-hover">
                <thead>
                  <tr>
                    <th>
                      <Input
                        type="text"
                        title="Фамилия Имя"
                        name="name"
                        placeholder={'Введите Имя Фамилию'}
                        onChange={this.handleInput}
                      />
                    </th>
                    <th>
                      <Input
                        type="text"
                        title="Email"
                        name="email"
                        placeholder="Email"
                        onChange={this.handleInput}
                      />
                    </th>
                    <th>
                      <Input
                        type="number"
                        title="Телефон"
                        name="phone"
                        placeholder="Телефон"
                        value={this.state.filters.fields.phone}
                        onChange={this.handleInput}
                      />
                    </th>
                    <th>
                      <Select
                        type="text"
                        title="Способ связи"
                        name="connection_type"
                        placeholder="Способ связи"
                        options={this.props.connection_type}
                        onChange={this.handleInput}
                      />
                    </th>
                    <th>
                      <div className="form-group">
                        <label>Date and time range:</label>
                        <div className="input-group">
                          <div className="input-group-prepend">
                            <span className="input-group-text">
                              <i className="far fa-clock" />
                            </span>
                          </div>
                          <input
                            type="text"
                            name="session_date"
                            className="form-control float-right"
                            onChange={this.handleInput}
                            id="reservationtime"
                          />
                        </div>
                      </div>
                    </th>
                    <th style={edit_icons}>Действия</th>
                  </tr>
                </thead>
                <tbody>
                  {this.props.users.map(element => {
                    return (
                      <tr>
                        <td>{element.name}</td>
                        <td>{element.email}</td>
                        <td>{element.phone}</td>
                        <td>{element.connection_type_string}</td>
                        <td></td>
                        <td style={icons}>
                          <a className="btn btn-app" style={btn}>
                            <i class="fas fa-user-edit" style={btn_icon}></i>
                          </a>
                          <a className="btn btn-app" style={btn}>
                            <i class="fas fa-user-slash" style={btn_icon}></i>
                          </a>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </>
    );
  }
}

const edit_icons = {
  verticalAlign: 'unset',
};

const icons = {
  display: 'flex',
  justifyContent: 'space-between',
};

const btn = {
  margin: 0,
  background: 'none',
  height: '30px',
  minWidth: '30px',
  border: 'none',
  padding: '5px',
};

const btn_icon = {
  fontSize: '18px',
};

const mapStateToProps = state => {
  return {
    users: state.newUserReducer.users,
    connection_type: state.newUserReducer.connection_type,
    token: state.authReducer.token,
  };
};

const mapDispatchToProps = {
  addUser,
  getUsers,
  getConnectionType,
};

export default connect(mapStateToProps, mapDispatchToProps)(Clients);
