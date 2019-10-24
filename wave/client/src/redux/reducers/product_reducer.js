import {
    GET_PRODUCTS_BY_ARRIVAL, GET_PRODUCTS_BY_SELL, GET_BRANDS, GET_WOODS
} from '../actions/types';
 

export default function(state={},action){
    switch(action.type){
        case GET_PRODUCTS_BY_SELL:
            return {
                 ...state, 
                 
                 }

         case GET_PRODUCTS_BY_ARRIVAL:
            return {
                 ...state, 
                 
                 }
        
                 case GET_BRANDS:
                    return {
                         ...state, 
                          brands: action.payload
                         
                         }
                                 
                 case GET_WOODS:
                    return {
                         ...state, 
                          woods: action.payload
                         
                         }
        default:
            return state;
    }
}

