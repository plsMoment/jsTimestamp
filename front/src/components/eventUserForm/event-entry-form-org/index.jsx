import s from './s.module.scss';
import Button from '../button';
import checkIcon from '../event-entry-form/check.svg';
import cross from "../event-entry-form/cross.svg"; 
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export const EventEntryFormOrg = () => {

  const[emptName, setEmptName] = useState(false);
  const[valueName, setValueName] = useState('');
  let handleChangeName = (event) => {setValueName(event.target.value); setEmptName(false);}

  const[emptCategory, setEmptCategory] = useState(false);
  const[valueCategory, setValueCategory] = useState('Финансы');
  let handleChangeCategory = (event) => {setValueCategory(event.target.value); setEmptCategory(false);}

  const[emptDate, setEmptDate] = useState(false);
  const[valueDate, setValueDate] = useState('');
  let handleChangeDate = (event) => {setValueDate(event.target.value); setEmptDate(false);}

  const[emptTime, setEmptTime] = useState(false);
  const[valueTime, setValueTime] = useState('');
  let handleChangeTime = (event) => {setValueTime(event.target.value); setEmptTime(false);}

  const[emptCountry, setEmptCountry] = useState(false);
  const[valueCountry, setValueCountry] = useState('Россия');
  let handleChangeCountry = (event) => {setValueCountry(event.target.value); setEmptCountry(false);}

  const[emptCity, setEmptCity] = useState(false);
  const[valueCity, setValueCity] = useState('Тольятти');
  let handleChangeCity = (event) => {setValueCity(event.target.value); setEmptCity(false);}

  const[emptPlace, setEmptPlace] = useState(false);
  const[valuePlace, setValuePlace] = useState('');
  let handleChangePlace = (event) => {setValuePlace(event.target.value); setEmptPlace(false);}

  const[valuePrice, setValuePrice] = useState('');
  let handleChangePrice = (event) => 
  {
    const re = /^[0-9\b]+$/;
    if (event.target.value === '' || re.test(event.target.value)) 
       setValuePrice(event.target.value);
  }

  const[valueShortDecription, setValueShortDecription] = useState('');
  let handleChangeShortDecription = (event) => {setValueShortDecription(event.target.value);}

  const[valueDecription, setValueDecription] = useState('');
  let handleChangeDecription = (event) => {setValueDecription(event.target.value);}

  const[emptCB, setEmptCB] = useState(false);
  const[checkedCB, setСheckedCB] = useState(false);
  let handleChangeCB = (event) => {setСheckedCB(!checkedCB); setEmptCB(false);}

  const navigate = useNavigate();

  function sendForm(event) {
    let trg = true;
    console.log([valueName, valueCategory, valueDate, valueTime, valueCountry, valueCity, valuePlace, valuePrice, valueShortDecription, valueDecription, checkedCB]);
    if (valueName === '')
    {
      setEmptName(true);
      trg = false;
    }

    if(valueCategory === '')
    {
      setEmptCategory(true)
      trg = false;
    }
    
    if(valueDate === '')
    {
      setEmptDate(true)
      trg = false;
    }
    
    if(valueTime === '')
    {
      setEmptTime(true)
      trg = false;
    }
    
    if(valueCountry === '')
    {
      setEmptCountry(true)
      trg = false;
    }

    if(valueCity === '')
    {
      setEmptCity(true)
      trg = false;
    }

    if(valuePlace === '')
    {
      setEmptPlace(true)
      trg = false;
    }

    if (!checkedCB)
    {
      setEmptCB(true);
      trg = false;
    }

    if (trg)
    {
      console.log([valueName, valueCategory, valueDate, valueTime, valueCountry, valueCity, valuePlace, valuePrice, valueShortDecription, valueDecription, checkedCB]);
      alert('данные отправлены');
      navigate('/');
    }
  }

    return (
        <div className={s.EventEntryForm}>
            <img className={s.EventEntryForm__cross} src={cross}alt="" />
            <h1 className={s.EventEntryForm__header}>
                Создание мероприятия
            </h1>

            <form>
              <input value={valueName} onChange={handleChangeName} type='text' className={emptName ? s.EventEntryForm__input__error : s.EventEntryForm__input} placeholder="Название" required/>
              <span className={emptName ? s.errorTxt__true : s.errorTxt__false}>Поле обязательное</span>

              <select value={valueCategory} onChange={handleChangeCategory} className={emptCategory ? s.EventEntryForm__input__error : s.EventEntryForm__input} required>
              <option disabled selected = "Категория"> Категория </option>
                  <option>Финансы</option>
                  <option> IT</option>
                  <option>HR</option>
                  <option>Производство</option>
                  <option>Торговля</option>
                  <option>Образование</option>
                  <option>Медицина</option>
              </select>
              <span className={emptCategory ? s.errorTxt__true : s.errorTxt__false}>Поле обязательное</span>

              <input value={valueDate} onChange={handleChangeDate} type='date' className={emptDate ? s.EventEntryForm__input__error : s.EventEntryForm__input} placeholder="Дата" required/>
              <span className={emptDate ? s.errorTxt__true : s.errorTxt__false}>Поле обязательное</span>

              <input value={valueTime} onChange={handleChangeTime} type='time' className={emptTime ? s.EventEntryForm__input__error : s.EventEntryForm__input} placeholder="Время" required/>
              <span className={emptTime ? s.errorTxt__true : s.errorTxt__false}>Поле обязательное</span>

              <select value={valueCountry} onChange={handleChangeCountry} className={emptCountry ? s.EventEntryForm__input__error : s.EventEntryForm__input} required>
                <option disabled selected = "Страна"> Страна </option>
                <option>Россия</option>
                <option>Украина</option>
                <option>Белоруссия</option>
                <option>Сербия</option>
                <option>Чехия</option>
              </select>
              <span className={emptCountry ? s.errorTxt__true : s.errorTxt__false}>Поле обязательное</span>

              
              <select value={valueCity} onChange={handleChangeCity} className={emptCity ? s.EventEntryForm__input__error : s.EventEntryForm__input} required>
                <option disabled selected = "Город"> Гоpод </option>
                <option>Тольятти</option>
                <option>Самара</option>
                <option>Тольятти</option>
                <option>Самара</option>
                <option>Тольятти</option>
                <option>Тольятти</option>
                <option>Самара</option>
              </select>
              <span className={emptCity ? s.errorTxt__true : s.errorTxt__false}>Поле обязательное</span>

              <input value={valuePlace} onChange={handleChangePlace} type='text' className={emptPlace ? s.EventEntryForm__input__error : s.EventEntryForm__input} placeholder="Место проведения" required/>
              <span className={emptPlace ? s.errorTxt__true : s.errorTxt__false}>Поле обязательное</span>

              <input value={valuePrice} onChange={handleChangePrice} type='text' pattern="[0-9]*" className={s.EventEntryForm__input} placeholder="Цена" required/>

              <input value={valueShortDecription} onChange={handleChangeShortDecription} type='text' className={s.EventEntryForm__input} placeholder="Краткое описание"  required/>

              <textarea value={valueDecription} onChange={handleChangeDecription} type='text' rows = "3" style={{resize: 'none'}} className={s.EventEntryForm__input} placeholder="Описание" required/>

              <p>Загрузите картинку для мероприятия:</p>
              <input type="file" name="photo" multiple accept="image/*,image/jpeg"/>

            </form>

            <div className={s.EventEntryForm__submitBox}>
                <div className={s.EventEntryForm__agreement}>
                  <input checked={checkedCB} onChange={handleChangeCB} type="checkbox" className={s.EventEntryForm__checkBox} id="agree" />
                  <label for="agree">
                  <span>Я согласен с <a href='#!'>условиями передачи информации</a></span></label>
                </div>
                <button onClick={sendForm} className={s.Button}>Отправить</button>
            </div>
            <span className={emptCB ? s.errorTxtCB__true : s.errorTxtCB__false}>Обязательный пункт</span>
        </div>
    );
};
