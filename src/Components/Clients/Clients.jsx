import React, { Component } from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import { Container } from './Container';
import './App.css';
import Sidebar from '../Sidebar/Sidebar';
import { connect } from 'react-redux';
import { addUser, getUsers } from '../../Redux/NewUser/newUserAction';
import Input from '../FormContainer/components/Input';
// import FormContainer from '../FormContainer/FormContainer.jsx';

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

  // triggerText = () => {
  //   const triggerText = 'Добавить';
  //   return triggerText;
  // };

  onSubmit = event => {
    event.preventDefault(event);
  };
  componentDidMount() {
    this.props.getUsers(this.state);
    console.log('from CDM', this.state.filters.fields.phone);
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
    this.props.getUsers(this.state);

    console.log('from handleInput', this.state.filters.fields.phone);
  };

  render() {
    console.log('from render', this.state.filters.fields.phone);

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
              {/* <FormContainer /> */}
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
                        name="name"
                        value={this.state.filters.fields.name}
                        placeholder={'Введите Имя Фамилию'}
                        onChange={this.handleInput}
                      />
                    </th>
                    <th>
                      <Input
                        type="text"
                        name="email"
                        placeholder="Email"
                        value={this.state.filters.fields.email}
                        onChange={this.handleInput}
                      />
                    </th>
                    <th>
                      <Input
                        type="number"
                        name="phone"
                        placeholder="Телефон"
                        value={this.state.filters.fields.phone}
                        onChange={this.handleInput}
                      />
                    </th>
                    <th>
                      <Input
                        type="text"
                        name="connection_type_string"
                        placeholder="Способ связи"
                        value={this.state.filters.fields.connection_type_string}
                        onChange={this.handleInput}
                      />
                    </th>
                    {/* <th>Действия</th> */}
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
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <Footer />
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
