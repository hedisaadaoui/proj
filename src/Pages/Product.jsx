import React, { useContext } from 'react'
import { ShopContext } from '../component/Context/ShopContext'
import { useParams } from 'react-router-dom'
import { Breadcrums } from '../component/Breadcrums/Breadcrums';
import { ProductDisplay } from '../component/ProductDisplay/ProductDisplay';
import { DescriptionBox } from '../component/DescriptionBox/DescriptionBox';

export default function Product() {
  const {all_product}= useContext(ShopContext);
  const {productId} =  useParams();
  const product = all_product.find((e)=> e.id === Number(productId))
  return (
    <div>
        <Breadcrums product={product} />
        <ProductDisplay product={product}/>
        <DescriptionBox/>
    </div>
  )
}
