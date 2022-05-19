import shopReducer from "../Reducer/Reducer";
import {combineReducers} from 'redux'
import { selectProduct } from "../Reducer/Reducer";
const RootReducer=combineReducers({
    shop:shopReducer,
    single:selectProduct
})
export default RootReducer