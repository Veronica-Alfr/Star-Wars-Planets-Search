import React, { useContext } from 'react';
import Context from '../AppContext/Context';
import Inputs from './Inputs';

function Table() {
  const { planets: { data },
    filterByName, filterByNumericValues } = useContext(Context);
  console.log(filterByNumericValues);
  const callFilters = () => {
    let dataPlanets = [...data];
    console.log(dataPlanets);
    if (filterByName.name.length > 0) {
      dataPlanets = dataPlanets
        .filter(({ name }) => name.toLowerCase().includes(filterByName.name));
    }
    if (filterByNumericValues.length > 0) {
      // const { column, comparison, value } = filterByNumericValues;
      dataPlanets = filterByNumericValues.map((obj) => dataPlanets.filter((planet) => {
        if (obj.comparison === 'maior que') {
          return planet[obj.column] > obj.value;
        }
        if (obj.comparison === 'menor que') {
          return planet[obj.column] < obj.value;
        }
        if (obj.comparison === 'igual a') {
          return planet[obj.column] === obj.value;
        }
        return planet;
      }));
      return dataPlanets[dataPlanets.length - 1];
    }
    console.log(dataPlanets[dataPlanets.length - 1]);
    return dataPlanets;
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
