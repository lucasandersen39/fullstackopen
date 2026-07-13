import './listCountryName.css'
const ListCountryName = ({ countries, handleViewCountry }) => {
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
            {countries.map((country, index) => {
                return <li key={index} className="liCountryName">
                    <span>{country.common}</span>
                    <button onClick={() => { handleViewCountry(country.common) }}>Show</button>
                </li>
            })}
        </ul>
    )
}

export default ListCountryName