import { Header } from '../layout/header';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import EventPageItem from '../../components/events/eventPageItem/';
import serverHost from '../../variables';
import EventCard from '../../components/events/event-card';

const divStyle = {
  backgroundColor:'#ECDFFA',
  height: '1024px',
};

const EventPage = () => {
  const [event, setEvent] = useState({});

  const params = useParams();

  const getEventById = async (id) => {
    const response =  await axios.get(`http://${serverHost}/events/` + id);
    return response;
  }

  const fetchEventById = async (id) => {
    const response = await getEventById(id);
    setEvent(response.data.data);
  }

  useEffect(() => {
    fetchEventById(params.id);
  }, []);

  return (
    <div style={divStyle}>
    <Header />
    <EventPageItem
      event = {event}
    />
     </div>
     
  );
};

export default EventPage;