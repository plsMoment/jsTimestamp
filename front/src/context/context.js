import { createContext } from "react";
import Store from "../pages/auth/store/store";

export const store = new Store();
export const EventsSearchContext = createContext({
    store,
});