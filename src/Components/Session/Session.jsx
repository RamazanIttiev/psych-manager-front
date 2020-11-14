import React from 'react';
import Header from '../Header/Header.jsx'
import Sidebar from '../SideBar/Sidebar.jsx'
import Footer from '../Footer/Footer.jsx'

const Session = () => {
  return (
    <>
      <Header />
      <Sidebar />
        <div class="content-wrapper">
          <div className="card card-light">
          <div className="card-header">
          <button type="button" className="btn btn-block btn-info col-2 float-left">Сбросить фильтры</button>
          <div className="card-tools">
              <ul className="pagination pagination-sm float-right">
                  <li className="page-item"><a className="page-link" href="#">&laquo;</a></li>
                  <li className="page-item"><a className="page-link" href="#">1</a></li>
                  <li className="page-item"><a className="page-link" href="#">2</a></li>
                  <li className="page-item"><a className="page-link" href="#">3</a></li>
                  <li className="page-item"><a className="page-link" href="#">&raquo;</a></li>
              </ul>
          </div>
          </div>
              <div className="card-body">
                  <div className="row">
                      <div className="col-1">
                          <input type="text" className="form-control" placeholder="ID"></input>
                      </div>
                      <div className="col-2">
                          <input type="text" className="form-control" placeholder="Имя"></input>
                      </div>
                      <div className="col-3">
                          <input type="text" className="form-control" placeholder="Фамилия"></input>
                      </div>
                      <div className="col-3">
                          <input type="text" className="form-control" placeholder="Телефон"></input>
                      </div>
                      <div className="col-3">
                          <input type="text" className="form-control" placeholder="Страна"></input>
                      </div>
                  </div>
              </div>
      </div>
          <div className="card">
                <div className="card-header">
                  <h3 className="card-title">Таблица с данными о клиенте</h3>
                </div>
                <div className="card-body">
                  <table className="table table-bordered table-hover">
                    <thead>
                    <tr>
                      <th>Фамилия Имя</th>
                      <th>Телефон</th>
                      <th>Дата приема</th>
                      <th>коментарий</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                      <td>Васильев Василий</td>
                      <td> +72424242424</td>
                      <td>01 января </td>
                      <td>какойто каоментарий</td>
                    </tr>
                    <tr>
                      <td>Иван Иванов</td>
                      <td> +72424242424</td>
                      <td>01 января </td>
                      <td>какойто каоментарий</td>
                    </tr>
                    </tbody>
                    <tfoot>
                    <tr>
                      <th>Фамилия Имя</th>
                      <th>Телефон</th>
                      <th>Дата приема</th>
                      <th>коментарий</th>
                    </tr>
                    </tfoot>
                  </table>
                </div>
        </div>
        </div>
      <Footer/>
    </>
  );
};

export default Session;