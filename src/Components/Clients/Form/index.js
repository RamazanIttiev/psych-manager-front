import React from 'react';

export const Form = ({ onSubmit }) => {
    return (
        <form onSubmit={onSubmit}>
            <div className="form-group">
                <label htmlFor="name">Ваше имя</label>
                <input className="form-control" id="name" />
            </div>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="name@example.com"
                />
            </div>
            <div className="form-group">
                <label htmlFor="name">Номер телефона</label>
                <input className="form-control" id="phone" />
            </div>
            <div className="form-group">
                <button className="form-control btn btn-primary" type="submit">
                    Добавить
                </button>
            </div>
        </form>
    );
};
export default Form;
