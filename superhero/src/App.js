import React, { useState }  from 'react';
import Spinners from './Components/Spinners';
import SearchBar from './Components/SearchBar';
import SearchResults from './SearchResults';


// const initialOccupation = {
//   text: 'Occupation',
//   name: 'Name',
//   base: 'Base',
// }

function App() {

  const [searchText, setSearchText] = useState('');
  const [superheroData, setSuperheroData] = useState([]);
  const [loading, setLoading] = useState(false);

  // const updateOccupation = async () => {
  //   setLoading(true);
  //   // const occupation_url = "https://www.superheroapi.com/api.php/1385824805149063/644/work"; 
  //   const res = await fetch(`https://www.superheroapi.com/api.php/10219177700206566/${searchText}/work`);
  //   const [newOccupation] = await res.json();
  //   console.log(Occupation.name);

    // const { occupation: text, name, base } = newOccupation;

    // setOccupation({
    //   text,
    //   name,
    //   base,
    // })
  async function searchSuperHeroes () {    
    const response = await fetch(`https://www.superheroapi.com/api.php/10219177700206566/search/${searchText}`);
    const data = await response.json();
    console.log("searchSuperHeroes -> data", data)


    setSuperheroData(data.results);
  }

  function handleChange (e) {
    const searchTerm = e.target.value;
    
    setSearchText(searchTerm); 
    if (searchTerm.length === 0) {
      setLoading(false);
      setSuperheroData([]);      
    }

    if (searchTerm.length > 2) {
      searchSuperHeroes();
      setLoading(true);
    }

  }
  
  return (
    <div className="app">
      <span id="title">SUPERHEROS</span>
      <img 
        src="https://img.europapress.es/fotoweb/fotonoticia_20170702174022_420.jpg"
        alt="logo"
      />

      <button onClick={(e) => handleChange(e)}> GET ANOTHER SUPERHERO  </button>
      { loading ? <Spinners /> : '' } 
      <br />
      <br />
      <div className="main">
        <SearchBar searchText={searchText} handleChange={handleChange} />
        <SearchResults superheroData={superheroData} />
      </div>


    </div>
    
  );
} 
export default App; 