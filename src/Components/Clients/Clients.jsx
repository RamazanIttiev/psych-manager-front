import React, { Component } from 'react';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import FormContainer from '../FormContainer/FormContainer';
import { connect } from 'react-redux';
import { addUser, getUsers } from '../../Redux/NewUser/newUserAction';

class Clients extends Component {
  componentDidMount() {
    this.props.getUsers();
  }

  render() {
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
              <FormContainer />
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
                    <th>Фамилия Имя</th>
                    <th>Пол</th>
                    <th>E-mail</th>
                    <th>Номер</th>
                    <th>Способ связи</th>
                    <th>Действия</th>
                  </tr>

                  {this.props.users.map(element => {
                    return (
                      <tr>
                        <td>{element.name}</td>
                        <td>{element.gender}</td>
                        <td>{element.email}</td>
                        <td>{element.phone}</td>
                        <td>{element.connection_type}</td>
                      </tr>
                    );
                  })}
                </thead>
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
  };
};

const mapDispatchToProps = {
  addUser,
  getUsers,
};

export default connect(mapStateToProps, mapDispatchToProps)(Clients);
