import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import ListPersons from './components/ListPersons'

function App() {

  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [showPhones, setShowPhones] = useState('')

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleAddPerson = (event) => {
    event.preventDefault()
    if (newName == '' || newNumber == '') {
      alert(`The name and phone number are required`)
      return
    }
    const exist = persons.find(element => element.name === newName)
    if (exist) {
      alert(`${newName} is already added to phonebook`)
      return
    }

    const newPerson = {
      name: newName,
      number: newNumber
    }
    setPersons(persons.concat(newPerson))
    setNewName('')
    setNewNumber('')
  }

  const handleFilterChange = (event) => {
    setShowPhones(event.target.value)
  }
  const showPhoneBook = (showPhones == '') ? persons : persons.filter(person => person.name.includes(showPhones))

  useEffect(() => {
    axios.get('http://localhost:3001/persons')
      .then(response => {
        console.log("DATA RESPONSE ", response)
        setPersons(response.data)
      })
  }, []) // Con [] el useEffect se ejecuta una vez cuando se renderiza el componente

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter handleFilterChange={handleFilterChange} />
      <br></br>
      <PersonForm
        newName={newName}
        newNumber={newNumber}
        handleAddPerson={handleAddPerson}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
      />
      <h2>Numbers</h2>
      <ListPersons persons={showPhoneBook} />
    </div>
  )
}

export default App
