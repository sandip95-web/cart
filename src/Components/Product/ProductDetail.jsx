import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {AiOutlineDelete} from 'react-icons/ai'
import { removeFromCart } from '../../Redux/Action/Action'
import {Link} from 'react-router-dom'
const ProductDetail = () => {
  const cartDetail=useSelector(state=>state.shop.cart)
  const dispatch=useDispatch()
  const check=cartDetail.length;
  return (
    <>        
       {
         check===0 ? (
           <h1>Cart is Empty</h1>
         ):
         (
          cartDetail.map((item)=>(
            <div className="main-detail">
              <Link to='/productshow' className='sub-detail'>
                 <div className="image">
                 <img src={item.image} alt={item.title} />
                 </div>
                   <div className="card-info">
                   <div className="card-title">
                 {item.title}
                 </div>
                 <div className="card-price">
                 ${item.price}
                 </div>
                   </div>
                   </Link>
                   <div className="del">
                   <button style={{cursor:'pointer',border:'none',background:'none'}} onClick={()=>dispatch(removeFromCart(item.id))}>
                   <AiOutlineDelete/>
                   </button>
                   </div>
            </div>
          ))
         )
       }
    </>  
  )
}

export default ProductDetail