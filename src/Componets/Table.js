import React, { useContext, useEffect } from 'react';
import Context from '../AppContext/Context';
import Inputs from './Inputs';

function Table() {
  const { planets: { data }, filterByName, filterByNumericValues,
    dataCopy, setDataCopy } = useContext(Context);
  const planets = () => {
    filterByNumericValues.forEach((obj) => {
      const dataPlanets = dataCopy.filter((planet) => {
        if (obj.comparison === 'maior que') {
          return Number(planet[obj.column]) > obj.value;
        }
        if (obj.comparison === 'menor que') {
          return Number(planet[obj.column]) < obj.value;
        }
        if (obj.comparison === 'igual a') {
          return planet[obj.column] === obj.value;
        }
        return planet;
      });
      setDataCopy(dataPlanets);
    });
  };
  useEffect(() => {
    const callFilters = () => {
      let dataPlanets = [...data];
      if (filterByName.name.length > 0) {
        dataPlanets = dataPlanets
          .filter(({ name }) => name.toLowerCase().includes(filterByName.name));
      }
      if (filterByNumericValues.length > 0) {
        console.log('ola');
        planets();
      }
      setDataCopy(dataPlanets);
    };
    callFilters();
  }, [filterByName, filterByNumericValues]);
  // Ajuda de Leo Araújo e André Felipe na lógica do requisito 4.
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
          {dataCopy.map((el) => (
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
