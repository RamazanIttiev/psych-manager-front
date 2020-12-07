import React, { Component } from 'react';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import FormContainer from '../FormContainer/FormContainer';
import { connect } from 'react-redux';
import { addUser } from '../../Redux/NewUser/newUserAction';

class Clients extends Component {
  state = {
    user: [
      this.props.name,
      this.props.gender,
      this.props.email,
      this.props.phone,
      this.props.connection_type_string,
    ],
  };

  componentDidUpdate() {
    console.log(this.state);
    console.log(this.props.name);
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
                  <tr>
                    {this.state.user.map(item => {
                      return <td> {item}</td>;
                    })}
                  </tr>
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
    name: state.newUserReducer.name,
    gender: state.newUserReducer.gender,
    email: state.newUserReducer.email,
    phone: state.newUserReducer.phone,
    connection_type_string: state.newUserReducer.connection_type_string,
  };
};

const mapDispatchToProps = {
  addUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(Clients);
