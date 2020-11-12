import React from 'react';

const SessionTable = () => {
    return (
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
    );
};

export default SessionTable;