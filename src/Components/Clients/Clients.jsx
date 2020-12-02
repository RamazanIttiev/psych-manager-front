import React from 'react';
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
                  <th>Пол</th>
                  <th>E-mail</th>
                  <th>Номер</th>
                  <th>Способ связи</th>
                  <th>Действия</th>
                </tr>
              </thead>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Clients;
