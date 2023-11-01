import PropTypes from 'prop-types';
export const Contacts = ({ contacts, onRemoveContact }) => {
  return (
    <>
      <h2 className=' mb-4 text-3xl'>Contacts:</h2>
      <ul>
        {contacts.map(({ id, name, number }) => (
          <li key={id} className='mb-2 border-2 rounded-md p-4'>
            <p>
              {name}: {number}
            </p>
            <button
              type='button'
              onClick={() => onRemoveContact(id)}
              className='rounded-lg bg-blue-500 px-2 hover:bg-rose-600 active:bg-rose-700 mt-2 text-white'
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

Contacts.propTypes = {
  contacts: PropTypes.array,
  onRemoveContact: PropTypes.func,
};
