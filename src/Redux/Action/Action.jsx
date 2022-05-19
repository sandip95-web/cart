import axios from 'axios'
import * as actionType from '../ActionType/ActionType'

export const addToCart=(itemid)=>{
    return{
        type:actionType.ADD_TO_CART,
        payload:{
            id:itemid
        }
    }
}
export const removeFromCart=(itemid)=>{
    return{
        type:actionType.REMOVE_FROM_CART,
        payload:{
            id:itemid
        }
    }
}
export const adjustQty=(itemid,value)=>{
    return{
        type:actionType.ADJUST_QTY,
        payload:{
            id:itemid,
            qty:value
        }
    }
}
export const fetchOneData=(item)=>{
    return{
        type:actionType.FETCH_ONE_DATA,
        payload:item
    }
}
export const removeOneData=()=>{
    return{
        type:actionType.REMOVE_ONE_DATA
    }
}
export const loadCurrentItem=(item)=>{
    return{
        type:actionType.LOAD_CURRENT_ITEM,
        payload:item
    }
}
export const fetchData=()=>{
    return async (dispatch)=>{
      const response=await axios.get('https://fakestoreapi.com/products')
      .catch((err)=>{
          console.log(err);
      })
      dispatch(loadCurrentItem(response.data))
    }
}
