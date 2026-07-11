import { useEffect, useState } from 'react'
import './App.css'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import ListPersons from './components/ListPersons'
import personService from './services/persons'

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
    personService.create(newPerson)
      .then(data => {
        setPersons(persons.concat(data))
        setNewName('')
        setNewNumber('')
      }
      )
  }

  const handleDeletePerson = (id) => {
    const person = persons.find(p => p.id == id)
    if (!person) {
      alert('Person not found')
      return
    }
    if (window.confirm(`Delete ${person.name}?`)) {
      personService.deletePerson(person.id)
      setPersons(persons.filter(p => p.id !== id))
    }
    console.log("ID DELETE", id)
  }

  const handleFilterChange = (event) => {
    setShowPhones(event.target.value)
  }
  const showPhoneBook = (showPhones == '') ? persons : persons.filter(person => person.name.includes(showPhones))

  useEffect(() => {
    personService.getAll()
      .then(data => {
        console.log("DATA RESPONSE ", data)
        setPersons(data)
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
      <ListPersons persons={showPhoneBook} handleDeletePerson={handleDeletePerson} />
    </div>
  )
}

export default App
