import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import Context from './Context';

const Provider = ({ children }) => {
  const [planets, setPlanets] = useState({
    data: [],
  });
  const [filterByName, setFilterByName] = useState({
    name: '',
  });
  useEffect(() => {
    const getData = async () => {
      const dataPlanets = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
      const response = await dataPlanets.json();
      console.log(dataPlanets);
      setPlanets((prevData) => ({ ...prevData, data: response.results }));
    };
    getData();
  }, []);
  const filterPlanets = () => (
    planets.data.filter(({ name }) => name.toLowerCase().includes(filterByName.name))
  );
  return (
    <Context.Provider
      value={ { planets, setPlanets, filterPlanets, setFilterByName, filterByName } }
    >
      {children}
    </Context.Provider>
  );
  // Ajuda de Halister Santos na requisição da API e no PropTypes.
  // Ajuda de Leonardo Araújo na exportação do Provider.
};

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
