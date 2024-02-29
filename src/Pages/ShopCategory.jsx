import React, { useContext } from 'react';
import './CSS/ShopCategory.css';
import { ShopContext } from '../component/Context/ShopContext';
import dropdown_icon from '../component/Assets/dropdown_icon.png';
import Item from '../component/Item/Item';

export default function ShopCategory(props) {
  const { all_product } = useContext(ShopContext);

  // Check if all_product is undefined or null before using map
  if (!all_product) {
    return <p>Loading...</p>; // or any other placeholder or loading state
  }

  return (
    <div className='shop-category'>
      <img className='shopcategory-banner' src={props.banner} alt="" />
      <div className='shopcategory-indexSort'>
        <p>
          <span>Showing 1-12</span> out of {all_product.length} products
        </p>
        <div className='shopcategory-sort'>
          Sort by <img src={dropdown_icon} alt='' />
        </div>
      </div>
      <div className='shopcategory-products'>
        {all_product.map((item, i) => {
          if (props.category === item.category) {
            return (
              <Item
                key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
      <div className='shopcategory-loadmore'></div>
    </div>
  );
}
