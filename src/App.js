import logo from './logo.svg';
import './App.css';
import {useEffect,useState} from 'react';
import Countries from './Countries/Countries';
import Search from './Countries/Search';

const url = "https://restcountries.com/v3.1/all";

function App() {

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [countries, setCountries] = useState([]);
  const [filterCountries, setfilterCountries] = useState(countries);

const fetchData = async(url)=>{
  setIsLoading(true);
  
  try{
    const response = await fetch(url);
    const data = await response.json();
    setCountries(data);
    setfilterCountries(data);
    setIsLoading(false);
    setError(false);
  }catch(error){
    setIsLoading(false);
    setError(error);
  }
  // console.log('show response data',response);
}
console.log('show data',countries);
  useEffect(() => {
    fetchData(url)
  }, [])

  const handleRemove =(name)=>{
   const filter = filterCountries.filter((country)=> country.name.common != name);
   setfilterCountries(filter);
  }
const handleSerch =(searchValue)=>{
  const value = searchValue.toLowerCase();
  const newCountries = countries.filter((country)=>{
    const countryName= country.name.common.toLowerCase();
    return countryName.startsWith(value);
  })
  setfilterCountries(newCountries);
}

  return (
  <>
  <h1>Country App</h1>
  <Search onSearch={handleSerch}/>
  {isLoading && <h2>Loading...</h2>}
  {error && <h2>{error.message}</h2>}
  {countries && <Countries countries={filterCountries} onRemoveCountry={handleRemove}/> }
  </>
  );
}

export default App;