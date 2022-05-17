import React from 'react'
import {useDispatch, useSelector } from 'react-redux'
import {Card,Button} from 'react-bootstrap' 
import { addToCart } from '../../Redux/Action/Action'
import {Link} from 'react-router-dom'
const ProductCard = () => {
  const product=useSelector(state=>state.shop.product) 
  const dispatch=useDispatch()
  return (
    <>
    
        {
          Object.keys(product).length===0 ? (
            <div>Loading....</div>
          ) : (
            product.map((item)=>(
              <div className="main-card" key={item.id}>
              <Card style={{ width: '18rem' }}>
              <Link to={`/product/${item.id}`} className='link'>
              <Card.Img variant="top" src={item.image} />
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>
                  {item.description.slice(0,100)}
                </Card.Text>
              </Card.Body>
              </Link>
              <Button variant="primary" onClick={()=> dispatch(addToCart(item.id))}>Add to Cart</Button>
            </Card>
                      </div>
                    ))
          )
        }
    </>
  )
}

export default ProductCard