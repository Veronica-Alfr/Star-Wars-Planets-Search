import React, { useContext } from 'react';
import Context from '../AppContext/Context';

function Inputs() {
  const { setFilterByName, filterByName } = useContext(Context);
  const { name } = filterByName;
  return (
    <div>
      <input
        data-testid="name-filter"
        type="text"
        name="filterByName"
        value={ name }
        onChange={ ({ target }) => setFilterByName({ name: target.value }) }
      />
    </div>
  );
}

export default Inputs;
