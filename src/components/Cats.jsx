import React from 'react';
import catAdoption from '../assets/img/cat_adoption.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
  faSyringe,
  faHandHoldingHeart,
  faInfoCircle,
  faMicrochip,
  faNeuter,
} from '@fortawesome/free-solid-svg-icons';
export const Cats = ({ cats }) => {
  const swipeCarousel = (ev) => {
    const target = ev.target.closest('span');
    
    target.dataset.id === 'right-arrow'
      ? target.previousElementSibling.scrollBy({
          top: 0,
          left: 500,
          behavior: 'smooth',
        })
      : target.nextElementSibling.scrollBy({
          top: 0,
          left: -500,
          behavior: 'smooth',
        });
  };
  return (
    <section className='cats'>
      <h2>cats for rehoming</h2>
      <span className='carouselArrow' data-id='left-arrow' onClick={swipeCarousel}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </span>
      <div>
        {cats.map((cat) => {
          return (
            <article key={cat._id}>
              <figure>
                <img src={catAdoption} alt={cat.name} />
                <figcaption>
                  <p>{cat.name}</p>
                  <p>
                    {cat.age ? `${Math.round(cat.age / 12)} yo` : ''} {cat.sex}
                  </p>
                  <p>{cat?.colour}</p>
                  <span>
                    {cat.vaccinated ? <FontAwesomeIcon icon={faSyringe} /> : ''}
                    {cat.microchipped ? (
                      <FontAwesomeIcon icon={faMicrochip} />
                    ) : (
                      ''
                    )}
                    {cat.neutered ? <FontAwesomeIcon icon={faNeuter} /> : ''}
                  </span>
                </figcaption>
              </figure>

              <details>
                <summary>
                  <FontAwesomeIcon icon={faInfoCircle} />
                  More about {cat.name}
                </summary>

                <p>
                  {cat.description
                    ? cat.description
                    : "We don't have information about this cat."}
                </p>
                <p className='btn'>
                  <span >
                    <FontAwesomeIcon icon={faHandHoldingHeart} />
                  </span>
                  adopt me
                </p>
              </details>
            </article>
          );
        })}
      </div>
      <span className='carouselArrow'data-id='right-arrow' onClick={swipeCarousel}>
        <FontAwesomeIcon icon={faChevronRight} />
      </span>
    </section>
  );
};
