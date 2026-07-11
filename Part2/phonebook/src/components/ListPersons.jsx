
const ListPersons = ({ persons, handleDeletePerson }) => {
    return (
        <>
            {persons.map((person, i) => <div key={i}>{person.name} {person.number} <button onClick={() => handleDeletePerson(person.id)}>delete</button></div>)}
        </>
    )
}

export default ListPersons