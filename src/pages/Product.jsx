import React, { useContext } from 'react'

export const Product = () => {
  const{all_product} =useContext(ShopContext);
  const{productID}=useParams();
  const product = all_product.find((e)=>e.id===Number(productID));
  return (
    <div>Product</div>
  )
}
export default Product