import React, { useContext, useState } from 'react';
import Context from '../AppContext/Context';

function Inputs() {
  const [numericFilters, setNumericFilters] = useState({
    column: 'population',
    comparison: 'maior que',
    value: '',
  });
  const { setFilterByName, filterByName,
    setFilterByNumericValues, filterPlanetsByPopulation } = useContext(Context);
  const { name } = filterByName;
  const { column, comparison, value } = numericFilters;
  const handleChange = ({ target }) => {
    const { name: name2, value: value2 } = target;
    setNumericFilters({ ...numericFilters, [name2]: value2 });
  };
  const handleClick = () => {
    setFilterByNumericValues(numericFilters);
    filterPlanetsByPopulation();
  };
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
        <option>population</option>
        <option>orbital_period</option>
        <option>diameter</option>
        <option>rotation_period</option>
        <option>surface_water</option>
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
