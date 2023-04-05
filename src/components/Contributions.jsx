import React from 'react';
import { NavLink } from 'react-router-dom';

export const Contributions = ({ contributions }) => {
  return (
    <section className='contributions'>
      <article>
        <h2>enjoy helping cats in need?</h2>
      </article>
      {contributions.map((el, index) => {
        return (
          <article key={el.id}>
            <img src={el.img} alt='' />
            <h4>{el.title}</h4>
            <p>{el.description}</p>
            <NavLink className='btn primaryBtn' to='/help-us'>
              {el.btn}
            </NavLink>
          </article>
        );
      })}
    </section>
  );
};
