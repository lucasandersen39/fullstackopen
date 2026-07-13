import WeatherInfo from "./WeatherInfo"

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
            <div>
                <h2>Weather in {info.name.common}</h2>
                <WeatherInfo lat={info.capitalInfo.latlng[0]} lon={info.capitalInfo.latlng[1]} />
            </div>
        </div>
    )
}

export default ShowCountryInfo

/*
{
    "name": {
        "common": "Madagascar",
        "official": "Republic of Madagascar",
        "nativeName": {
            "fra": {
                "official": "République de Madagascar",
                "common": "Madagascar"
            },
            "mlg": {
                "official": "Repoblikan'i Madagasikara",
                "common": "Madagasikara"
            }
        }
    },
    "tld": [
        ".mg"
    ],
    "cca2": "MG",
    "ccn3": "450",
    "cca3": "MDG",
    "cioc": "MAD",
    "independent": true,
    "status": "officially-assigned",
    "unMember": true,
    "currencies": {
        "MGA": {
            "name": "Malagasy ariary",
            "symbol": "Ar"
        }
    },
    "idd": {
        "root": "+2",
        "suffixes": [
            "61"
        ]
    },
    "capital": [
        "Antananarivo"
    ],
    "altSpellings": [
        "MG",
        "Republic of Madagascar",
        "Repoblikan'i Madagasikara",
        "République de Madagascar"
    ],
    "region": "Africa",
    "subregion": "Eastern Africa",
    "languages": {
        "fra": "French",
        "mlg": "Malagasy"
    },
    "translations": {
        "ara": {
            "official": "جمهورية مدغشقر",
            "common": "مدغشقر"
        },
        "bre": {
            "official": "Republik Madagaskar",
            "common": "Madagaskar"
        },
        "ces": {
            "official": "Madagaskarská republika",
            "common": "Madagaskar"
        },
        "cym": {
            "official": "Republic of Madagascar",
            "common": "Madagascar"
        },
        "deu": {
            "official": "Republik Madagaskar",
            "common": "Madagaskar"
        },
        "est": {
            "official": "Madagaskari Vabariik",
            "common": "Madagaskar"
        },
        "fin": {
            "official": "Madagaskarin tasavalta",
            "common": "Madagaskar"
        },
        "fra": {
            "official": "République de Madagascar",
            "common": "Madagascar"
        },
        "hrv": {
            "official": "Republika Madagaskar",
            "common": "Madagaskar"
        },
        "hun": {
            "official": "Madagaszkári Köztársaság",
            "common": "Madagaszkár"
        },
        "ita": {
            "official": "Repubblica del Madagascar",
            "common": "Madagascar"
        },
        "jpn": {
            "official": "マダガスカル共和国",
            "common": "マダガスカル"
        },
        "kor": {
            "official": "마다가스카르 공화국",
            "common": "마다가스카르"
        },
        "nld": {
            "official": "Republiek Madagaskar",
            "common": "Madagaskar"
        },
        "per": {
            "official": "جمهوری ماداگاسکار",
            "common": "ماداگاسکار"
        },
        "pol": {
            "official": "Republika Madagaskaru",
            "common": "Madagaskar"
        },
        "por": {
            "official": "República de Madagáscar",
            "common": "Madagáscar"
        },
        "rus": {
            "official": "Республика Мадагаскар",
            "common": "Мадагаскар"
        },
        "slk": {
            "official": "Madagaskarská republika",
            "common": "Madagaskar"
        },
        "spa": {
            "official": "República de Madagascar",
            "common": "Madagascar"
        },
        "srp": {
            "official": "Република Мадагаскар",
            "common": "Мадагаскар"
        },
        "swe": {
            "official": "Republiken Madagaskar",
            "common": "Madagaskar"
        },
        "tur": {
            "official": "Madagaskar Cumhuriyeti",
            "common": "Madagaskar"
        },
        "urd": {
            "official": "جمہوریہ مڈغاسکر",
            "common": "مڈغاسکر"
        },
        "zho": {
            "official": "马达加斯加共和国",
            "common": "马达加斯加"
        }
    },
    "latlng": [
        -20,
        47
    ],
    "landlocked": false,
    "area": 587041,
    "demonyms": {
        "eng": {
            "f": "Malagasy",
            "m": "Malagasy"
        },
        "fra": {
            "f": "Malgache",
            "m": "Malgache"
        }
    },
    "flag": "🇲🇬",
    "maps": {
        "googleMaps": "https://goo.gl/maps/AHQh2ABBaFW6Ngj26",
        "openStreetMaps": "https://www.openstreetmap.org/relation/447325"
    },
    "population": 27691019,
    "gini": {
        "2012": 42.6
    },
    "fifa": "MAD",
    "car": {
        "signs": [
            "RM"
        ],
        "side": "right"
    },
    "timezones": [
        "UTC+03:00"
    ],
    "continents": [
        "Africa"
    ],
    "flags": {
        "png": "https://flagcdn.com/w320/mg.png",
        "svg": "https://flagcdn.com/mg.svg",
        "alt": "The flag of Madagascar features a white vertical band on the hoist side that takes up about one-third the width of the field, and two equal horizontal bands of red and green adjoining the vertical band."
    },
    "coatOfArms": {
        "png": "https://mainfacts.com/media/images/coats_of_arms/mg.png",
        "svg": "https://mainfacts.com/media/images/coats_of_arms/mg.svg"
    },
    "startOfWeek": "monday",
    "capitalInfo": {
        "latlng": [
            -18.92,
            47.52
        ]
    },
    "postalCode": {
        "format": "###",
        "regex": "^(\\d{3})$"
    }
}
    */