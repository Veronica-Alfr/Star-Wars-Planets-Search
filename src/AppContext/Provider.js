import React from 'react';
import PropTypes from 'prop-types';
import Context from './Context';

const Provider = ({ children }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('https://swapi-trybe.herokuapp.com/api/planets/')
      .then((response) => response.json())
      .then((json) => setData(json));
  }, [data]);
  return (
    <Context.Provider>
      {children}
    </Context.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
