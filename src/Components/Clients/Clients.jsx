import React, { Component } from 'react';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import Input from '../UI/Input';
import Select from '../UI/Select';
import { connect } from 'react-redux';
import {
  addUser,
  getUser,
  getUsersList,
  getConnectionType,
} from '../../Redux/NewUser/newUserAction';
import { NavLink } from 'react-router-dom';
import './App.css';

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

  componentDidMount() {
    this.props.getUsersList(this.state);
    this.props.getConnectionType();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.filters.fields != prevState.filters.fields) {
      this.props.getUsersList(this.state);
    }
  }

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
    this.props.getUsersList(this.state);
  };

  clearFilter = () => {
    this.setState({
      filters: {
        fields: {
          ...this.state.filters.fields,
          id: '',
          name: '',
          email: '',
          phone: '',
          connection_type: '',
          session_date: '',
        },
      },
    });
  };

  edit = element => {
    this.props.getUser(element);
  };

  render() {
    return (
      <>
        <Header />
        <Sidebar />
        <div class="content-wrapper">
          <div className="card">
            <div className="card-header table_header">
              <h3>Таблица с данными о клиентах</h3>
              <NavLink to="/adduser">
                <button type="button" class="btn btn-outline-primary add_client">
                  Добавить клиента
                </button>
              </NavLink>
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
                        value={this.state.filters.fields.name}
                        placeholder={'Введите Имя Фамилию'}
                        onChange={this.handleInput}
                      />
                    </th>
                    <th>
                      <Input
                        type="email"
                        title="Email"
                        name="email"
                        placeholder="Email"
                        value={this.state.filters.fields.email}
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
                        type="select"
                        title="Способ связи"
                        name="connection_type"
                        placeholder="Способ связи"
                        options={this.props.connection_type}
                        onChange={this.handleInput}
                      />
                    </th>
                    <th className="edit">
                      Действия
                      <div>
                        <button
                          onClick={this.clearFilter}
                          type="button"
                          class="btn btn-outline-primary clear_filter"
                        >
                          <i class="fas fa-times"></i>
                        </button>
                      </div>
                    </th>
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
                        {/* <td></td> */}
                        <td className="edit_icons">
                          <NavLink
                            to="/adduser"
                            className="btn btn-app edit_btn_link"
                            onClick={e => this.edit(element, e)}
                          >
                            <i class="fas fa-user-edit edit_btn_icon"></i>
                          </NavLink>
                          <NavLink to="/deleteuser" className="btn btn-app edit_btn_link">
                            <i class="fas fa-user-slash edit_btn_icon"></i>
                          </NavLink>
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

const mapStateToProps = state => {
  return {
    users: state.newUserReducer.users,
    connection_type: state.newUserReducer.connection_type,
    token: state.authReducer.token,
  };
};

const mapDispatchToProps = {
  addUser,
  getUser,
  getUsersList,
  getConnectionType,
};

export default connect(mapStateToProps, mapDispatchToProps)(Clients);
