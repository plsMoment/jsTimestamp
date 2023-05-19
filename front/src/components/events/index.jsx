import {React, useEffect, useState} from 'react';
import axios from 'axios';
import EventCard from './event-card';
import EventList from './event-list';

function Events(props) {

  return (
    <div className="Event">
      {props.events.length ?
        <EventList events={props.events}/> :
        <h1 className='d-flex justify-content-center'>Мероприятия не найдены</h1>
      }
    </div>
  );
}

export default Events;