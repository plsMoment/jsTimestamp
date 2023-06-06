import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Store from "./store/store";

export const store = new Store();

export const Context = createContext({
  store,
});

