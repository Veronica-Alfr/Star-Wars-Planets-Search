import React, { useContext } from 'react';
import Context from '../AppContext/Context';
import Inputs from './Inputs';

function Table() {
  const { planets: { data }, filterPlanets } = useContext(Context);
  // const { name } = filterByName;
  const callFilters = () => {
    if (filterPlanets().length > 0) {
      return filterPlanets();
    }
    return data;
  };
  return (
    <main>
      <Inputs />
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Rotation Period</th>
            <th>Orbital Period</th>
            <th>Diamater</th>
            <th>Climate</th>
            <th>Gravity</th>
            <th>Terrain</th>
            <th>Surface Water</th>
            <th>Population</th>
            <th>Films</th>
            <th>Created</th>
            <th>Edited</th>
            <th>URL</th>
          </tr>
        </thead>
        <tbody>
          {callFilters().map((el) => (
            <tr key={ el.name }>
              <td>{ el.name }</td>
              <td>{ el.rotation_period }</td>
              <td>{ el.orbital_period }</td>
              <td>{ el.diameter }</td>
              <td>{ el.climate }</td>
              <td>{ el.gravity }</td>
              <td>{ el.terrain }</td>
              <td>{ el.surface_water }</td>
              <td>{ el.population }</td>
              <td>{el.films.map((film) => film)}</td>
              <td>{ el.created }</td>
              <td>{ el.edited }</td>
              <td>{ el.url }</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}

export default Table;
