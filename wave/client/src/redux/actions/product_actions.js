import axios from 'axios';
import {
   GET_PRODUCT_BY_ARRIVAL,
   SELL, GET_BRANDS, GET_WOODS
} from './types';

import { PRODUCT_SERVER} from '../../Components/utils/misc';

//Get Product by ID
export function getProductsBySell(){

}

//Get products by arrival
export function getProductsByArrival () {
    
}


//CATEGORIES

export function getBrands(){
  const request  = axios.get(`${PRODUCT_SERVER}/woods`)
  .then((response) => response.data);

  return {
     type: GET_BRANDS,
     payload: request
  }

}


export function getWoods(){
   const request  = axios.get(`${PRODUCT_SERVER}/woods`)
  .then((response) => response.data);

  return {
     type: GET_WOODS,
     payload: request
  }
}

