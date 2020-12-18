import React, { Component } from 'react';

class EditUser extends Component {
  render() {
    return (
      <form className="container-fluid" onSubmit={this.handleFormSubmit}>
        <Input
          type="text"
          title="Фамилия Имя"
          name="name"
          placeholder={'Введите Имя Фамилию'}
          onChange={this.handleInput}
        />
        <Select
          title="Пол"
          name="gender"
          placeholder="Выберете пол"
          options={this.state.gender_list}
          onChange={this.handleInput}
        />
        <Select
          title="Способ связи"
          name="connection_type"
          placeholder="Выберите способ связи"
          options={this.props.connection_type}
          onChange={this.handleInput}
        />
        <Input
          type="email"
          title="Email"
          name="email"
          placeholder="Введите свой E-mail"
          onChange={this.handleInput}
        />
        <Input
          type="number"
          title="Phone number"
          name="phone"
          placeholder="Введите свой номер"
          onChange={this.handleInput}
        />
        {/*Submit */}
        <Button
          action={this.handleFormSubmit}
          type="primary"
          title="Отправить"
          style={buttonStyle}
          disabled={this.props.isLoading}
        />
        {/* Clear the form */}
        <Button
          action={this.handleClearForm}
          type="secondary"
          title="Очистить"
          style={buttonStyle}
        />
      </form>
    );
  }
}

export default EditUser;
