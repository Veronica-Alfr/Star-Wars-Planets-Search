import React, { useContext, useEffect } from 'react';
import Context from '../AppContext/Context';
import ContainerTable from '../style/Table';
import Inputs from './Inputs';

function Table() {
  const { planets: { data }, filterByName, filterByNumericValues,
    dataCopy, setDataCopy } = useContext(Context);

  const planets = (dataPlanets) => {
    filterByNumericValues.forEach((obj) => {
      dataPlanets = dataPlanets.filter((planet) => {
        if (obj.comparison === 'bigger then') {
          return Number(planet[obj.column]) > obj.value;
        }
        if (obj.comparison === 'less than') {
          return Number(planet[obj.column]) < obj.value;
        }
        if (obj.comparison === 'equal to') {
          return planet[obj.column] === obj.value;
        }
        return planet;
      });
      setDataCopy(dataPlanets);
    });
  };

  useEffect(() => {
    const callFilters = async () => {
      let dataPlanets = [...data]; // spred operator realiza cópia do meu array de planetas original

      if (filterByName.name.length > 0) {
        dataPlanets = dataPlanets
          .filter(({ name }) => name.toLowerCase().includes(filterByName.name));
        setDataCopy(dataPlanets);
      }
      if (filterByNumericValues.length > 0) {
        planets(dataPlanets);
      } else {
        setDataCopy(dataPlanets); // serve como default
      }
    };

    callFilters();
  }, [data, filterByName, filterByNumericValues, setDataCopy]);

  // Ajuda de Leo Araújo, André Felipe e Laís Nametala na lógica do requisito 4.
  return (
    <ContainerTable>
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
            <th className='column-films'>Films</th>
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
              <td>{ el.movies.join(', ') }</td>
              <td>{ el.created }</td>
              <td>{ el.edited }</td>
              <td>{ el.url }</td>
            </tr>
          ))}
        </tbody>
      </table>
    </ContainerTable>
  );
}

export default Table;
