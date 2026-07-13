const ShowCountryInfo = ({ info }) => {
    const showCountryInfoStyle = {
        "margin": "10px",
        "backgroundColor": "#bcc7d3",
        "padding": "10px"
    }
    if (info === null) {
        return null
    }
    return (
        <div style={showCountryInfoStyle}>
            <h2>{info.name.common}</h2>
            <div>
                <img src={info.flags.png} alt={info.flags.alt} />
            </div>
            <div>
                <p>Common name: {info.name.common}</p>
                <p>Official name: {info.name.official}</p>
                <p>Capital: {info.capital[0]}</p>
                <p>Area: {info.area}</p>
                <p>Population: {info.population}</p>
            </div>
        </div>
    )
}

export default ShowCountryInfo