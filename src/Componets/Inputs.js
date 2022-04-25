import React, { useContext, useState } from 'react';
import Context from '../AppContext/Context';

function Inputs() {
  const [numericFilters, setNumericFilters] = useState({
    column: 'population',
    comparison: 'maior que',
    value: '0',
  });
  // console.log(Object.values(numericFilters)[0]);
  const { setFilterByName, filterByName,
    setFilterByNumericValues, filterByNumericValues } = useContext(Context);
  const { name } = filterByName;
  const { column, comparison, value } = numericFilters;
  const handleChange = ({ target }) => {
    const { name: name2, value: value2 } = target;
    setNumericFilters({ ...numericFilters, [name2]: value2 });
  };
  const handleClick = () => {
    setFilterByNumericValues([...filterByNumericValues, numericFilters]);
  };
  const optionsField = ['population', 'orbital_period', 'diameter',
    'rotation_period', 'surface_water'];
  return (
    <div>
      <input
        data-testid="name-filter"
        type="text"
        name="filterByName"
        value={ name }
        onChange={ ({ target }) => setFilterByName({ name: target.value }) }
      />
      <select
        data-testid="column-filter"
        name="column"
        value={ column }
        onChange={ handleChange }
      >
        { optionsField.map((field, index) => (
          <option key={ index }>
            {
              // numericFilters.filter((el) => field !== el.column)
              // filterByNumericValues.filter((el) => el.column !== field)
              field
            }
          </option>))}
      </select>
      <select
        data-testid="comparison-filter"
        name="comparison"
        value={ comparison }
        onChange={ handleChange }
      >
        <option>maior que</option>
        <option>menor que</option>
        <option>igual a</option>
      </select>
      <input
        data-testid="value-filter"
        type="number"
        name="value"
        value={ value }
        onChange={ handleChange }
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ handleClick }
      >
        FILTRAR
      </button>
    </div>
  );
}

export default Inputs;
