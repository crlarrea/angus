import React from 'react'
import { NavLink } from 'react-router-dom';
import heroCat from '../assets/img/hero_cat.png';

export const Hero = () => {
  return (
    <section className='Hero'>
      <article>
        <h3>We strive to make the world a better place for cats.</h3>
        <p>
          We are a private, non-profit organisation dedicated to finding
          volunteers to help cats in need.
        </p>
        <NavLink className='btn primaryBtn' to={'/adoption'}>
          adopt a cat
        </NavLink>
        <NavLink className='btn secondaryBtn' to={'/help-us'}>
          donate
        </NavLink>
      </article>
      <article>
        {/* <NavLink className='btn darkBkgBtn' to={'/help-us'}>
          help us today
        </NavLink> */}
        <img src={heroCat} alt='Hero Cat' />
      </article>
    </section>
  )
}
