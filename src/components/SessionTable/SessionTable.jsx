import React from 'react';

const SessionTable = () => {
    return (
        <div className="card">
              <div className="card-header">
                <h3 className="card-title">Таблица с данными о клиенте</h3>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-6">
                    <input type="text" className="form-control" placeholder="План на сессию"></input>
                  </div>
                  <div className="col-3">
                    <input type="text" className="form-control" placeholder="Тяжесть заболевания"></input>
                  </div>
                  <br/>
                  <br/>
                  <div className="col-9">
                    <input type="text" className="form-control" placeholder="План на терапию"></input>
                  </div>
                </div>
              </div>
            </div>
    );
};

export default SessionTable;
