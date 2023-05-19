import { EnvironmentOutlined } from '@ant-design/icons';
import s from './s.module.scss';
import avatar from './avatar.png';
import React, {useContext, useRef, useState} from "react";
import useDetectOutsideClick from './useDetectOutsideClick'
import { Link } from 'react-router-dom';
import PlacesDropdown from '../../../components/placesDropdown';
import {EventsSearchContext} from "../../../context/context";

export const Header = () => {
    const {setSearchPlace} = useContext(EventsSearchContext);

    /* user dropdown */
    const dropdownRefUser = useRef(null);
    const [isActiveUser, setIsActiveUser] = useDetectOutsideClick(dropdownRefUser, false);
    const onClickUser = () => setIsActiveUser(!isActiveUser);

    /* city dropdown */
    const dropdownRefCity = useRef(null);
    const [isActiveCity, setIsActiveCity] = useDetectOutsideClick(dropdownRefCity, false);
    const onClickCity = () => {
        setIsActiveCity(!isActiveCity);
    };

    function handleClickCity(e) 
    {
        e.preventDefault();
        onClickCity(); //to close on click
        //console.log(e.target.value);
        setSearchPlace(e.target.value);
    }

    function handleClickUser(e) 
    {
        e.preventDefault();
        console.log('click22'); //action
        onClickUser(); //to close on click
    }

    return (
        <div className={"banner"}>
            <div className={s.Header}>
                <div className={"container"}>
                    <div className={s.header + " row align-items-center d-flex justify-content-between"}>
                        <div className ={"col-2"} ref={dropdownRefCity}>
                            <div className={s.city} onClick={onClickCity}>
                                <EnvironmentOutlined />
                                <u>Самара</u>
                            </div>
                            {/* <div className={isActiveCity ? s.cityListActive : s.cityList}>
                                <input type="text" placeholder="Введите место" className={s.firtsEl} />
                                <button onClick={handleClickCity} type="button" className={s.onlEl}>Online</button>
                                <button onClick={handleClickCity} type="button">Самара</button>
                                <button onClick={handleClickCity} type="button">Волгоград</button>
                                <button onClick={handleClickCity} type="button">Саратов</button>
                                <button onClick={handleClickCity} type="button">Сызрань</button>
                                <button onClick={handleClickCity} type="button">Ульяновск</button>
                                <button onClick={handleClickCity} type="button" className={s.lastEl}>Тольятти</button>
                            </div> */}
                            <PlacesDropdown
                                isActiveCity={isActiveCity}
                                handleClickCity={handleClickCity}
                            />
                        </div>
                        <div className ={"col-7"}></div>
                        <div className ={"col"} ref={dropdownRefUser}>
                            <div className={s.userInfo} onClick={onClickUser}>
                                <img className={s.avatar} src={avatar} alt="avatar"/>
                                <div>Василий</div>
                            </div>
                            <div className={isActiveUser ? s.userListActive : s.userList}>
                                <button onClick={handleClickUser} className={s.firtsBt}>Мои билеты</button>
                                <button onClick={handleClickUser}>Подписки</button>
                                <button onClick={handleClickUser}>Избранное</button>
                                <button onClick={handleClickUser}>Выход</button>
                                <button onClick={handleClickUser}>Настройки</button>
                                <Link to={'/eventRegOrg'}><button className={s.lastBt}>Стать организатором</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
        </div> 
    );
  };