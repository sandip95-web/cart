import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchData } from '../../Redux/Action/Action'
import ProductCard from './ProductCard'

const ProductList = () => {
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(fetchData())
  },[])
 
  return (
    <div className='all-card'>
      <ProductCard/>
    </div>
  )
}

export default ProductList