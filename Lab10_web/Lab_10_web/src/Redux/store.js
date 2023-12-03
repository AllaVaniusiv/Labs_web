import { createStore } from "redux";
import printerReducer from "./reducers";


const store = createStore(printerReducer);

export default store;