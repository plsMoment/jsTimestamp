import s from './s.module.scss';
//import './calendar.css';
import './calendar.scss'
import { CaretDownOutlined, CaretUpOutlined, ConsoleSqlOutlined } from '@ant-design/icons';
import React, { useContext, useRef } from "react";
import { useState } from "react";
import { useDetectOutsideClick } from "./useDetectOutsideClick";
import Calendar from 'react-calendar';
import { EventsSearchContext } from '../../context/context';



export const Date = () => {
    const {setSearchDate} = useContext(EventsSearchContext);

    const dropdownRef = useRef(null);
    const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
    const onClick = () => setIsActive(!isActive);

    //const [date, setDate] = useState(new Date());
    const [date, setDate] = useState();

    const prnt = () => {
        console.log(date);
    }

    const setSearchedDate = (value) => {
        setDate(value);
        setSearchDate(value);
    }

    return (
        <div className={s.date} ref={dropdownRef}>

            <button className={s.dateButton}  onClick={onClick}> 
                <div className = {s.textDate}>Дата </div>
                <div className = {isActive ? s.iconDateActive : s.iconDateInactive}> <CaretDownOutlined /> </div>
            </button>

            <div className={isActive ? s.calendarActive : s.calendar}>
                <Calendar 
                    onChange={(value, event) => setSearchedDate(value)}
                    value={date}
                    selectRange={true}  />
            </div>
        </div>
    );
  };