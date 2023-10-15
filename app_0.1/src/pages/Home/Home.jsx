import axios from 'axios';
import {useState, useEffect} from "react";
import {Controls} from '../../components/Controls/Controls';
import {ALL_COUNTRIES} from "../../config";
import {List} from "../../components/List/List";
import {Card} from "../../components/Card/Card";
import {useNavigate, useParams} from "react-router-dom";

export const Home = () => {
    const [countries, setCountries] = useState([]);

    let navigate = useNavigate();

    useEffect(() => {
        axios.get(ALL_COUNTRIES).then(
            ({data}) => setCountries(data)
        )
    }, []);
    return (
        <>
            <Controls/>
            <List>
                {countries.map((country) => {
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
                                 onClick={() => navigate(`/country/${country.name}`)}
                                 {...countryInfo} />
                })
                }
            </List>
        </>
    )
}