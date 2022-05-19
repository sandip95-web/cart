import React, { useEffect, useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { AiOutlineDelete } from 'react-icons/ai'
import { adjustQty, removeFromCart } from '../../Redux/Action/Action'
import {Button} from 'react-bootstrap'
const ProductCartShow = () => {
    const cartDetail=useSelector(state=>state.shop.cart)
    const dispatch=useDispatch();
    const[total,setTotal]=useState()
    const[input,setInput]=useState(1)
    
    useEffect(()=>{
        setTotal(cartDetail.reduce((acc,curr)=>acc+curr.price*curr.qty,0))    
    },[cartDetail])
  return (
      <div className='main-s'>
          <div className="sub-s">
            {
                cartDetail.map((item)=>(
                    
                        <div className="show-detail" key={item.id}>
                      <div className='sub-detail'>
                         <div className="image">
                         <img src={item.image} alt={item.title} />
                         </div>
                           <div className="card-info">
                           <div className="card-title">
                         {item.title}
                         </div>
                         <div className="card-price">
                          Price: ${item.price}
                         </div>
                            <div className="rating">
                                Rating: {item.rating.rate}
                            </div>
                             <div className="qty">
                                 <label>Quantity: <input type="number" min='1' value={input} onChange={(e)=>setInput(e.target.value)} onClick={(e)=>dispatch(adjustQty(item.id,e.target.value))} /></label>
                             </div>
                           </div>
                           </div>
                           <div className="del">
                           <button style={{cursor:'pointer',border:'none',background:'none'}} onClick={()=>dispatch(removeFromCart(item.id))}>
                           <AiOutlineDelete/>
                           </button>
                           </div>
                    </div>
                
                  ))
            }
            </div>
            <div className="total">
                      <h1>TOTAL:{total} </h1>
                      <Button>Proceed To Buy</Button>
                    </div>
      </div>
  )
}

export default ProductCartShow