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
  const [filterByNumericValues, setFilterByNumericValues] = useState([]);
  const [dataCopy, setDataCopy] = useState([]);
  // a cópia é necessária para não perder os dados originais e evitar loops.
  useEffect(() => {
    const getData = async () => {
      const dataPlanets = await fetch('https://swapi.dev/api/planets');
      const response = await dataPlanets.json();
      setPlanets({ data: response.results });
      setDataCopy(response.results);
    };
    getData();
  }, []);

  return (
    <Context.Provider
      value={
        { planets,
          filterByName,
          filterByNumericValues,
          dataCopy,
          setPlanets,
          setFilterByName,
          setFilterByNumericValues,
          setDataCopy }
      }
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
