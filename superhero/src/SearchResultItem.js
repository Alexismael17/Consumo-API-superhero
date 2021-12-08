import React from 'react';

function SearchResultItem(props) {
  const {data} = props;

  console.log('data', data);
  return (
    <div className="search-result">
      <div className="left">
        <img src={data.image.url} alt="super pic" />
      </div>
      <div className="right">
        <h2>{data.name}</h2>
        <span style={{ color:'gray', marginBottom: 5 }}>{data.biography['full-name']}</span>
        {/* <div className="stats">        
          <div>Speed: {data.powerstats.speed}</div>
          <div>Power: {data.powerstats.power}</div>
        </div> */}
        <div className="work">        
          <div>Occupation: {data.work.occupation}</div>
          <div>Base: {data.work.base}</div>
        </div>
      </div>  
    </div>
  );
}

export default SearchResultItem;