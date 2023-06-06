import React, {useContext, useEffect, useState} from 'react';
import Layout from './pages/layout';
import EventPage from './pages/event';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EventReg from './pages/eventReg';
import EventRegOrg from './pages/eventRegOrg';
import './index.scss';
//import app from '../src/pages/auth/App'
import {EventsSearchContext} from "./context/context";
import {Context, store} from "./index";
import UserService from "./pages/auth/services/UserService";
import LoginForm from "./pages/auth/components/LoginForm";
import {observer} from "mobx-react-lite";




/*function App() {
    const [searchDate, setSearchDate] = useState('');
    const [searchPlace, setSearchPlace] = useState('');

  return(
      <EventsSearchContext.Provider value={{
          searchDate,
          setSearchDate,
          searchPlace,
          setSearchPlace,
          store
      }}>
      <Router>
         <Routes>
          <Route exact path="/" element={<Layout />}/>
          <Route exact path="/events/:id" element={<EventPage /> }/>
          <Route path="/eventReg" element={<EventReg /> }/>
          <Route path="/eventRegOrg" element={<EventRegOrg /> }/>
          <Route path="/login" element={<app /> }/>
         </Routes>
      </Router>
      </EventsSearchContext.Provider>
  );
}*/

function App() {
    const [searchDate, setSearchDate] = useState('');
    const [searchPlace, setSearchPlace] = useState('');
    const {store} = useContext(Context);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        if (localStorage.getItem('token')) {
            store.checkAuth()
        }
    }, [])

    if (store.isLoading) {
        return <div>Загрузка...</div>
    }

    if (!store.isAuth) {
        console.log(store.isAuth)
        return (
            <Context.Provider value={{
                store
            }}>
                <Router>
                    <Routes>
                        <Route path="/login" element={<LoginForm />}/>
                    </Routes>
                </Router>
            </Context.Provider>
        );
    }
    console.log(store.isAuth + '40')
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
                    { store.user.isAdmin &&
                        <Route path="/eventRegOrg" element={<EventRegOrg /> }/>
                    }
                </Routes>
            </Router>
        </EventsSearchContext.Provider>
    );
}

export default observer(App);
