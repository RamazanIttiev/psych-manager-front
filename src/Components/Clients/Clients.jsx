import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Sidebar from "../SideBar/Sidebar";
import { Container } from "./Container";
import './App.css';

const Clients = () => {
    const triggerText = 'Добавить';
    const onSubmit = (event) => {
        event.preventDefault(event);
        console.log(event.target.name.value);
        console.log(event.target.email.value);
        console.log(event.target.phone.value);
    };
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
                  <br/>
              <Container triggerText={triggerText} onSubmit={onSubmit} />
              </div>
            {/*<FormContainer />*/}
          </div>
        </div>
        <div className="card">
          <div className="card-header">
            <h3>Таблица с данными о клиентах</h3>
          </div>
          <div className="card-body">
            <table className="table table-bordered table-hover">
              <thead>
                <tr>
                  <th>Фамилия Имя</th>
                  <th>E-mail</th>
                  <th>Номер телефона</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <input type="text" className="form-control"></input>
                  </td>
                  <td>
                    <input type="text" className="form-control"></input>
                  </td>
                  <td>
                    <input type="text" className="form-control"></input>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Clients;
