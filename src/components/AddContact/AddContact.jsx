import PropTypes from 'prop-types';
import { useState } from 'react';

export const AddContact = ({ addNewContact }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const onChangeName = evt => {
    setName(evt.target.value);
  };
  const onChangeNumber = evt => {
    setNumber(evt.target.value);
  };
  const onSubmit = evt => {
    evt.preventDefault();

    addNewContact({ name: name, number: number });
    evt.target.reset();
  };

  return (
    <form onSubmit={onSubmit} className='mb-2 flex flex-col gap-4 items-start'>
      <h2 className='mb-4 text-3xl'>Phonebook</h2>
      <label className=''>
        Name:
        <input
          type='text'
          name='name'
          required
          onChange={onChangeName}
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
          onChange={onChangeNumber}
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
};

AddContact.propTypes = {
  addNewContact: PropTypes.func,
};
