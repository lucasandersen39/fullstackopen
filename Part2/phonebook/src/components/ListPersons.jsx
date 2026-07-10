
const ListPersons = ({ persons }) => {
    return (
        <>
            {persons.map((person, i) => <p key={i}>{person.name} {person.number}</p>)}
        </>
    )
}

export default ListPersons