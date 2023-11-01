import PropTypes from 'prop-types';
import { Component } from 'react';

export class AddContact extends Component {
  state = {
    name: '',
    number: '',
  };

  onChange = evt => {
    this.setState({ [evt.target.name]: evt.target.value });
  };

  onSubmit = evt => {
    evt.preventDefault();
    this.props.addNewContact({
      name: this.state.name,
      number: this.state.number,
    });

    evt.target.reset();
  };

  render() {
    return (
      <form onSubmit={this.onSubmit} className='mb-2 flex flex-col gap-4 items-start'>
        <h2 className='mb-4 text-3xl'>Phonebook</h2>
        <label className=''>
          Name:
          <input
            type='text'
            name='name'
            required
            onChange={this.onChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' \\-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            className='rounded-lg bg-blue-500 px-2 ml-6 text-white'
          />
        </label>
        <label>
          Number:
          <input
            type='tel'
            name='number'
            required
            onChange={this.onChange}
            pattern='^[ 0-9]+$'
            className='rounded-lg bg-blue-500 px-2 ml-2 text-white'
          />
        </label>
        <button
          type='submit'
          className='rounded-lg bg-blue-500 px-4 py-2 hover:bg-green-600 active:bg-rose-700 ml-auto text-white'
        >
          add contact
        </button>
      </form>
    );
  }
}
AddContact.propTypes = {
  addNewContact: PropTypes.func,
};
