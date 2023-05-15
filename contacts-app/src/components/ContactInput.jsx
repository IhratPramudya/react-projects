/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-unused-state */
/* eslint-disable arrow-body-style */
/* eslint-disable semi */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';

class ContactInput extends React.Component {
  constructor(props) {
    super(props);

    // inisialisasi state
    this.state = {
      name: '',
      tag: '',
    };

    this.onNameChangeEventHandler = this.onNameChangeEventHandler.bind(this);
    this.onTagChangeEventHandler = this.onTagChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onNameChangeEventHandler(event) {
    this.setState(() => {
      return {
        name: event.target.value,
      }
    })
  }

  onTagChangeEventHandler(event) {
    this.setState(() => {
      return {
        tag: event.target.value,
      }
    })
  }

  onSubmitEventHandler(event) {
    event.preventDefault();

    this.props.addContact(this.state)
  }

  render() {
    return (
      <form className="contact-input" action="" onSubmit={this.onSubmitEventHandler}>
        <input type="text" placeholder="Name" value={this.state.name} onChange={this.onNameChangeEventHandler} />
        <input type="email" placeholder="Tag" value={this.state.tag} onChange={this.onTagChangeEventHandler} />
        <button type="submit">Tambah</button>
      </form>
    );
  }
}

export default ContactInput;
