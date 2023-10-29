import {Link, useParams, useNavigate} from "react-router-dom";
import axios from "axios";
import {useState, useEffect} from "react";
import {IoArrowBack} from 'react-icons/io5';
import styled from "styled-components";
import {searchByCountry} from "../../config";
import {Button} from "../../components/Button/Button";
import {CountryInfo} from "../../components/CountryInfo/CountryInfo";

export const Detail = () => {
    const {name} = useParams();
    const navigate = useNavigate();
    const [country, setCountry] = useState(null);

    console.log(country);

    useEffect(() => {
        axios.get(searchByCountry(name)).then(({data}) => setCountry(data[0]));
    }, [name]);

    return (
        <>
            <Button onClick={() => navigate(-1)}>
                <IoArrowBack/>
                Back
            </Button>
            {country && <CountryInfo {...country} />}

        </>
    )
}