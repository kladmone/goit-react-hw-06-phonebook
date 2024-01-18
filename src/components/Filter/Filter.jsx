import css from './Filter.module.css';
const Filter = ({ filter, handleChangeFilter }) => {
  return (
    <div className={css.filter}>
      <p>Find contacts by name</p>
      <input
        value={filter}
        onChange={handleChangeFilter}
        type="text"
        name="filter"
        placeholder="Kate..."
      />
    </div>
  );
};

export { Filter };
