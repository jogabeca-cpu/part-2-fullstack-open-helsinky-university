import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '1001', id: 1 },
    { name: 'Jose Betancourt', number: '1002', id: 2 },
    { name: 'Sonia Viteri', number: '1003', id: 3 },
    { name: 'Gabo Alejo', number: '1004', id: 4 }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  // state for search filter
  const [filter, setFilter] = useState('')

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  // handler for filter input
  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }

  const addPerson = (event) => {
    event.preventDefault()

    const nameExists = persons.some(person => person.name === newName)

    if (nameExists) {
      alert(`${newName} is already added to phonebook`)
      return
    }

    const personObject = {
      name: newName,
      number: newNumber,
      id: persons.length + 1
    }

    setPersons(persons.concat(personObject))
    setNewName('')
    setNewNumber('')
  }

  // filter persons array case-insensitive
  const personsToShow = persons.filter(person => 
    person.name.toLowerCase().includes(filter.toLowerCase())
  )

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        Filter shown with: <input value={filter} onChange={handleFilterChange} />
      </div>

      <h3>Add a new</h3>
      <form onSubmit={addPerson}>
        <div>
          Name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          Number: <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">Add</button>
        </div>
      </form>

      <h2>Numbers</h2>
      <ul>
        {personsToShow.map(person => 
          <li key={person.id}>{person.name} {person.number}</li>
        )}
      </ul>
    </div>
  )
}

export default App