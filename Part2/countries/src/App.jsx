import { useEffect, useState } from 'react'
import './App.css'
import ListCountryName from './components/ListCountryName'
import countryService from './services/countries'
import ShowCountryInfo from './components/ShowCountryInfo'

function App() {
  const [countries, setCountries] = useState([])
  const [countriesList, setCountriesList] = useState([])
  const [uniqueResult, setUniqueResult] = useState(null)
  const [countryShow, setCountryShow] = useState(null)

  useEffect(() => {
    if (uniqueResult !== null) {
      countryService.getByName(uniqueResult).then(data => {
        setCountryShow(data)
      })
    }
  }, [uniqueResult])

  useEffect(() => {
    countryService.getAll().then((data) => {
      const result = data.map(d => {
        return d.name
      })
      setCountries(result)
    })
  }, [])

  const handleChangeSearch = (event) => {
    const result = countries.filter(c => c.common.includes(event.target.value))
    setCountriesList(result)
    if (result.length == 1) {
      setUniqueResult(result[0].common)
    } else {
      setUniqueResult(null)
      setCountryShow(null)
    }
  }

  const handleViewCountry = (commonName) => {
    setUniqueResult(commonName)
  }

  return (
    <>
      <div style={{ "margin": "10px", "padding": "10px", "width": "300px" }}>
        <p>find countries</p>
        <input onChange={handleChangeSearch}></input>
        <ListCountryName countries={countriesList} handleViewCountry={handleViewCountry} />
      </div>
      <ShowCountryInfo info={countryShow} />
    </>
  )
}

export default App
