import {React, useState} from 'react';
import Layout from './pages/layout';
import EventPage from './pages/event';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EventReg from './pages/eventReg';
import EventRegOrg from './pages/eventRegOrg';
import './index.scss';
import {EventsSearchContext} from "./context/context";


function App() {
    const [searchDate, setSearchDate] = useState('');
    const [searchPlace, setSearchPlace] = useState('');

  return(
      <EventsSearchContext.Provider value={{
          searchDate,
          setSearchDate,
          searchPlace,
          setSearchPlace,
      }}>
      <Router>
         <Routes>
          <Route exact path="/" element={<Layout />}/>
          <Route exact path="/events/:id" element={<EventPage /> }/>
          <Route path="/eventReg" element={<EventReg /> }/>
          <Route path="/eventRegOrg" element={<EventRegOrg /> }/>
         </Routes>
      </Router>
      </EventsSearchContext.Provider>
  );
}

export default App;
