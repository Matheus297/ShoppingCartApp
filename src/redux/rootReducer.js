import {combineReducers} from 'redux'
import ShoppingBasket from './reducers/shoppingBasket';


export default combineReducers({
    order: ShoppingBasket,
})