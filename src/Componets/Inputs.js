import React, { useContext, useState } from 'react';
import Context from '../AppContext/Context';
import ContainerInput from '../style/Input';

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
  const filterOptions = filterByNumericValues.map((el) => el.column);
  return (
    <ContainerInput>
      <h1>Star Wars</h1>
      <div className="inputs">
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
          { optionsField.filter((field) => !filterOptions.includes(field)).map((option) => (
            <option key={ option }>{ option }</option>
          ))}
        </select>
        <select
          data-testid="comparison-filter"
          name="comparison"
          value={ comparison }
          onChange={ handleChange }
        >
          <option>bigger then</option>
          <option>less than</option>
          <option>equal to</option>
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
          FILTER
        </button>
      </div>
    </ContainerInput>
  );
}

export default Inputs;
