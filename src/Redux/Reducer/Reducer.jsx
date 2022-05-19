import * as actionType from '../ActionType/ActionType'

const INITIAL_STATE={
    product:[],
    cart:[],
    currentItem:null,
    showOne:[]
}

const shopReducer=(state=INITIAL_STATE,action)=>{
switch(action.type){
    case actionType.ADD_TO_CART:
        const item= state.product.find(data=>data.id===action.payload.id)
        const incart=state.cart.find(item=>item.id===action.payload.id ? true : false)
        return{
            ...state,   
        cart:incart ? {...item,qty:1}: [...state.cart,{...item,qty:1}]
        }
    case actionType.REMOVE_FROM_CART:
        const filterItem=state.cart.filter(item=>item.id!==action.payload.id)
        return{
            ...state,...state.cart,cart:filterItem
        }
    case actionType.ADJUST_QTY:
        return{
            ...state,cart:state.cart.filter(c=>c.id===action.payload.id ? (c.qty=action.payload.qty):c.qty)
        }
    case actionType.LOAD_CURRENT_ITEM:
        return{
            ...state,product:action.payload
        }
    default:
        return state
}
}
export const selectProduct=(state={},action)=>
{
    switch(action.type){
        case actionType.FETCH_ONE_DATA:
        return{
            ...state,...action.payload
        }
        case actionType.REMOVE_ONE_DATA:
            return {}
        default:
            return state;
    }
}
export default shopReducer