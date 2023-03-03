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
  // a cópia é necessária para não perder os dados originais e evitar loops:
  const [dataCopy, setDataCopy] = useState([]);

  const getMovies = async (film) => {
    const dataMovie = await fetch(film);
    const moviesRelatedByPlanet = await dataMovie.json();
    return moviesRelatedByPlanet.title;
};

  const getPlanetsAndMovies = async (planet) => {
    const receiveMovies = planet.films.map((film) => getMovies(film));
    const allMovies = await Promise.all(receiveMovies);
    return {...planet, movies: allMovies};
  };

  useEffect(() => {
    const getData = async () => {
      const dataPlanets = await fetch('https://swapi.dev/api/planets');
      const responseDataPlanets = await dataPlanets.json();

      const planetsAndMovies = responseDataPlanets.results.map((planet) => getPlanetsAndMovies(planet));
      const planetsRelatedToMovies = await Promise.all(planetsAndMovies);

      setPlanets({ data: planetsRelatedToMovies });
      setDataCopy(planetsRelatedToMovies);
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
