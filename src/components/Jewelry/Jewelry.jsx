import React, { useState } from 'react';
import './Jewelry.scss';
import item from '../../img/item.png';
import bigItem from '../../img/bigitem.png';
import star from '../../img/Star.png'

function Jewelry(){
  let num = JSON.parse(window.localStorage.getItem('count'));
  const [count,setCount] = useState(num);
  window.localStorage.setItem('count', JSON.stringify(count));

  return(
    <div className='container'>
      <div className='one_card'>
      <div className='flex'>

        <div className="flex__img">
          <div>
            <img src={item} alt=""/>
          </div>
          <div>
            <img src={item} alt=""/>
          </div>
          <div>
            <img src={item} alt=""/>
          </div>
          <div>
            <img src={item} alt=""/>
          </div>
        </div>

        <div className='flex__big-item'>
          <img src={bigItem} alt="" />
        </div>

      </div>
      <div>
      <h3 className='item__name'>Lira Earrings</h3>
        <p className='item__price'>$ 20,00</p>
        <div>
          <img src={star} alt="" />
        </div>
        <p className='about__item'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis consequat sed eu felis. 
        </p>
        <div className='btns'>
        <div className="btns__block">
        <button className='btns__style' onClick={() => setCount(count > 0 ? count - 1: count)}>--</button>
        <p>{num == null ? num = 0 : num}</p>
        <button className='btns__style'  onClick={() => setCount(count + 1)}>+</button>
        </div>
        <button className='card__add'>ADD TO CART</button>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Jewelry;