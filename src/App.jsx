
import { useEffect, useRef, useState } from 'react'
import './App.css'
import useFetch from './hooks/useFetch'
import getRandomNumber from './utils/getRandomNumber'
import LocationInfo from './components/LocationInfo'
import ResidentCard from './components/ResidentCard'

function App() {
  
  const [inputLocation, setInputLocation] = useState(getRandomNumber(126))
  const [suggestions, setSuggestions] = useState([])

  const url = `https://rickandmortyapi.com/api/location/${inputLocation || 'lanza un error'}`
  const [ location, getLocations, hasError ] = useFetch(url)

  useEffect(() => {
    getLocations()
  }, [inputLocation])

  const inputSearch = useRef()

  const handleSubmit = (e) => { 
    e.preventDefault()
    setInputLocation(inputSearch.current.value.trim())
  }

  const handleInputChange = (e) => {
    e.preventDefault()
    setInputLocation(inputSearch.current.value.trim())

    const filteredLocations = location.filter((location) => location.name.toLowerCase().includes(inputSearch.current.value.trim().toLowerCase())
    );

    setSuggestions(filteredLocations);
   }

   console.log(suggestions)

  return (
    <>
      <div className='container container-flex'>
        <h1>Rick And Morty</h1>
        <form className="input-container" onSubmit={handleSubmit}>
          <input ref={inputSearch} type="text" onChange={handleInputChange}/>
          <ul>
            {suggestions?.map(location => (
              <li key={location.id}>
                {location.name}
              </li>
          ))}
          </ul>
          <button className="button">Search</button>
        </form>
          {
              hasError 
                ? <h2>Hey! you must provide an id form 1 to 126 T_T </h2> 
                : 
            <>
              <LocationInfo 
                location={location}
              />
              <div className='container-resident'>
                {
                  location?.residents.map(url => ( 
                    <ResidentCard 
                      key={url}
                      url={url}
                    />
                  ))
                }
              </div>
            </>
          }
      </div>
    </>
  )
}

export default App
