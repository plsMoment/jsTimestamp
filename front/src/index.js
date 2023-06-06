import React, {useContext, createContext} from 'react';
import ReactDOM from 'react-dom';
import Store from '../src/pages/auth/store/store'
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';

export const store = new Store();

export const Context = createContext({
    store,
})


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Context.Provider value={{
        store
    }}>
        <App />
    </Context.Provider>
); 
