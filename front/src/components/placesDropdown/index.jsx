import {React, useEffect, useState, useMemo, useContext} from 'react';
import axios from 'axios';
import s from './s.module.scss';
import {EventsSearchContext} from "../../context/context";

const divStyle = {
    backgroundColor: '#ECDFFA',
    height: '1024px',
};

const PlacesDropdown = (props) => {
    const [places, setPlaces] = useState([]);
    const [searchString, setSearchString] = useState('');

    const fetchPlaces = async () => {
        const fetchedPlaces = await axios.get("http://localhost:3001/cities");
        return fetchedPlaces.data;
    }

    const searchedPlaces = useMemo(() => {
        return places.filter(place => place.name_city.toLowerCase().includes(searchString.toLowerCase()));
    }, [searchString, places]);

    useEffect( () => {
        const asyncFunction = async () => {
            const fetchedPlaces = await fetchPlaces();
            setPlaces(fetchedPlaces.data);
        }
        asyncFunction();
    }, []);

    return (
        <div className={props.isActiveCity ? s.cityListActive : s.cityList}>
            <input type="text"
                   placeholder="Введите место"
                   className={s.firtsEl}
                   value={searchString}
                   onChange={e => setSearchString(e.target.value)}/>
            <button onClick={props.handleClickCity} type="button" className={s.onlEl} value={"Online"}>Online</button>
            {searchedPlaces.slice(0,5).map((place) => <button onClick={props.handleClickCity} type="button" value={place.name_city}>{place.name_city}</button>)}
        </div>
    );
};

export default PlacesDropdown;