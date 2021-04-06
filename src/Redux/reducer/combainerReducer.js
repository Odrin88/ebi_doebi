import {combineReducers} from "redux";
import filters from "./filters";
import sushis from "./sushis";


const rootReducer = combineReducers({
    filters,
    sushis,
});



export default rootReducer;