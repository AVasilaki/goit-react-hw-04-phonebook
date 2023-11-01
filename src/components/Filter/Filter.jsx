import PropTypes from 'prop-types';
export const Filter = ({ handleFilter }) => {
  return (
    <div className='mb-2 mt-6  '>
      <label className='text-lg grid'>
        Find contacts by name
        <input
          type='text'
          name='filter'
          onChange={handleFilter}
          className='rounded-lg bg-blue-500 px-2 text-white '
        ></input>
      </label>
    </div>
  );
};
Filter.propTypes = {
  handleFilter: PropTypes.func,
};
