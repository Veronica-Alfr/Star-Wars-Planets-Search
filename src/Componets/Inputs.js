import React, { useContext } from 'react';
import Context from '../AppContext/Context';

function Inputs() {
  const { setFilterByName, filterByName,
    setfilterByNumericValues, filterByNumericValues } = useContext(Context);
  const { name } = filterByName;
  const { column, comparison, value } = filterByNumericValues;
  const statesOfFilter = ({ target }) => { // usar () para retornar ?
    setfilterByNumericValues({ column, value: target.value });
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
        value={ column }
        onChange={ statesOfFilter }
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
      >
        <option>maior que</option>
        <option>menor que</option>
        <option>igual a</option>
      </select>
      <input
        data-testid="value-filter"
        type="text"
        name="filterByNumericValues"
        value={ value }
      />
      <button
        type="button"
        data-testid="button-filter"
      >
        FILTRAR
      </button>
    </div>
  );
}

export default Inputs;
