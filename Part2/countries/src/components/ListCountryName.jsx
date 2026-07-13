import './listCountryName.css'
const ListCountryName = ({ countries }) => {
    if (!countries) {
        return null
    }
    if (countries.length > 10) {
        return (
            <div>Too many matches, specify another filter</div>
        )
    }
    return (
        <ul className="listCountryName">
            {countries.map((country, index) => { return <li key={index}>{country.common}</li> })}
        </ul>
    )
}

export default ListCountryName