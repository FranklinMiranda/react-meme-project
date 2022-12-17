import React from 'react';

// The Data component uses fetch to retrieve data from a external API and store it in a state object, then display it in the component
const Data = () => {
  const [starWarsData, setStarWarsData] = React.useState({});

  const fetchData = () => {
    return fetch('https://swapi.dev/api/people/1')
      .then((response) => response.json())
      .then((data) => setStarWarsData(data));
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="Data-Div">
      <h1>Star Wars Data</h1>
      <h1>
        {starWarsData.name}
      </h1>
    </div>
  );
};

// const Data = () => {
//     const [starWarsData, setStarWarsData] = React.useState({})

//     fetch('https://swapi.dev/api/people/1')
//         .then(res => res.json())
//         .then(data => setStarWarsData(data))

//         return (
//             <div className='Data-Div'>
//                 <p>{JSON.stringify(starWarsData, null, 2)}</p>
//             </div>
//         )

// }

export default Data
