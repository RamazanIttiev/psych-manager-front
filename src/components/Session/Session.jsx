import React from 'react';

const Session = () => {
  return (
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
  );
};

export default Session;