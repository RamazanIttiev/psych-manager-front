import React from 'react';
import Header from '../Header/Header.jsx';
import Sidebar from '../Sidebar/Sidebar.jsx';

const Session = () => {
  return (
    <>
      <Header />
      <Sidebar />
      <div class="content-wrapper">
        <div className="card card-light">
          <div className="card-header">
            <div>
              <h3 className="card-title">Таблица сессий</h3>
            </div>
          </div>
        </div>
        {/* Таблица с данными о клиенте */}
        <div className="card">
          <div className="card-header">
            <h3 className="card-title">Таблица с данными о клиенте</h3>
          </div>
          <div className="card-body">
            <table className="table table-bordered table-hover">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Фамилия Имя</th>
                  <th>Телефон</th>
                  <th>E-mail</th>
                  <th>Способ связи</th>
                  <th>Действия</th>
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
                  <td>
                    <input type="text" className="form-control"></input>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Session;
