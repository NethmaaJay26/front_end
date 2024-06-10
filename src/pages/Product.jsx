import React, { useContext } from 'react'
import {ShopContext} from '../Context/Shopcontext'
import {useParams} from 'react-router-dom'
import Breadcrum from '../Components/Breadcrum/Breadcrum';
import Productdisplay from '../Components/Productdisplay/Productdisplay';

 const Product = () => {
  const{all_product} =useContext(ShopContext);
  const{productID}=useParams();
  const product = all_product.find((e)=>e.id===Number(productID));
  return (
    <div>
      <Breadcrum product={product}/>
      <Productdisplay product={product}/>
    </div>
  )
}
export default Product