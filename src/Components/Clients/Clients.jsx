import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import FormContainer from '../FormContainer/FormContainer';

const Clients = () => {
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
                  <th>Возраст</th>
                  <th>Пол</th>
                  <th>Способ связи</th>
                  <th>Номер телефона/E-mail</th>
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
