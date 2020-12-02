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
          {/* Фильтры */}
          <div className="card-body">
            <div className="row">
              <div className="col-2">
                <input type="text" className="form-control" placeholder="Имя"></input>
              </div>
              <div className="col-3">
                <input type="text" className="form-control" placeholder="Фамилия"></input>
              </div>
              <div className="col-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Тяжесть заболевания"
                ></input>
              </div>
              <div className="col-3">
                <input type="text" className="form-control" placeholder="План на сессию"></input>
              </div>
              <div className="col-6">
                <input type="text" className="form-control" placeholder="План на терапию"></input>
              </div>
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
