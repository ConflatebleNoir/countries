import axios from 'axios';
import {useState, useEffect} from "react";
import {Controls} from '../../components/Controls/Controls';
import {ALL_COUNTRIES} from "../../config";
import {List} from "../../components/List/List";
import {Card} from "../../components/Card/Card";
import {useNavigate} from "react-router-dom";

export const Home = ({countries, setCountries}) => {
    const [filteredCountry, setFilteredCountry] = useState(countries);

    const navigate = useNavigate();

    const handleSearch = (search, region) => {
        let data = [...countries];

        if(region) {
            data = data.filter(country => country.region.includes(region));
        }

        if(search) {
            data = data.filter(country => country.name.toLowerCase().includes(search.toLowerCase()));
        }

        setFilteredCountry(data);
    }

    useEffect(() => {
        if(!countries.length) {
            axios.get(ALL_COUNTRIES).then(
                ({data}) => setCountries(data)
            )
        }
    }, []);
    return (
        <>
            <Controls onSearch={handleSearch}/>
            <List>
                {filteredCountry.map((country) => {
                    const countryInfo = {
                        img: country.flags.svg,
                        name: country.name,
                        info: [
                            {
                                title: 'Population',
                                description: country.population.toLocaleString(),
                            },
                            {
                                title: 'Region',
                                description: country.region,
                            },
                            {
                                title: 'Capital',
                                description: country.capital,
                            }
                        ],
                    };

                    return <Card key={country.name}
                                 onClick={() => navigate(`/detail/${country.name}`)}
                                 {...countryInfo} />
                })
                }
            </List>
        </>
    )
}