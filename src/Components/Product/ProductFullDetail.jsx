import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import {useDispatch, useSelector} from 'react-redux'
import { fetchOneData, removeOneData } from '../../Redux/Action/Action'
const ProductFullDetail = () => {
    const {productid}=useParams();
    const product=useSelector(state=>state.single)
    console.log(product);
    const dispatch=useDispatch();
    const fetchResult=async ()=>{
      const response=await axios.get(`https://fakestoreapi.com/products/${productid}`)
      .catch(err=>{
            console.log(err);
      })
      console.log(response);
      dispatch(fetchOneData(response.data))
      
  }
  useEffect(()=>{
    if(productid && productid!=='')
       fetchResult()
    return ()=>{
      dispatch(removeOneData())
    }
  },[productid])
  return (
    <>
      {Object.keys(product).length===0 ? (
        <div>Loading....</div>
      ) : (
        <div className="main-show">
        <div className="s-img">
          <img src={product.image} alt="" />
        </div>
        <div className="main-info">
          <div className="title">
             <h1>{product.title}</h1>
          </div>
          <div className="desp">
            <p>{product.description}</p>
          </div>
          <div className="qty">
            Quantity: <select>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>
          <div className="price">
              <h2>Price: ${product.price}</h2>
          </div>
          <div className="rating">
              <h3>Rating:{product.rating.rate}</h3>
          </div>
        </div>
      </div>
      )}
    </>
  )
}

export default ProductFullDetail