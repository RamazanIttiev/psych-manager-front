import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Sidebar from '../SideBar/Sidebar';

const Clients = () => {
    return (
        <>
            <Header />
            <Sidebar />
            <div class="content-wrapper">
                <div className="card card-light">
                    <div className="card-header">
                        <button type="button" className="btn btn-block btn-info col-2 float-left">
                            Сбросить фильтры
                        </button>
                        <div className="card-tools">
                            <ul className="pagination pagination-sm float-right">
                                <li className="page-item">
                                    <a className="page-link" href="#">
                                        &laquo;
                                    </a>
                                </li>
                                <li className="page-item">
                                    <a className="page-link" href="#">
                                        1
                                    </a>
                                </li>
                                <li className="page-item">
                                    <a className="page-link" href="#">
                                        2
                                    </a>
                                </li>
                                <li className="page-item">
                                    <a className="page-link" href="#">
                                        3
                                    </a>
                                </li>
                                <li className="page-item">
                                    <a className="page-link" href="#">
                                        &raquo;
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* Фильтры */}
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
                                <input type="text" className="form-control" placeholder="E-mail"></input>
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
            <Footer />
        </>
    );
};
export default Clients;
