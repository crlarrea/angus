import { React } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import defaultImage from '../assets/img/default_article_image.jpg';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';

export const CatWelfare = ({ publications }) => {
  const sortedPublications = publications.sort((a, b) => {
    return b.year - a.year;
  });

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
    <section className='catWelfare'>
      <h2>cat welfare</h2>
      <span data-id='left-arrow' onClick={swipeCarousel}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </span>
      <div>
        {sortedPublications.map((paper, index) => {
          return (
            <article key={index}>
              <img
                loading='lazy'
                src={paper.articleImg ?? defaultImage}
                alt=''
              />
              <h3>
                <a href={`/articles/${paper.article_id}`}>{paper.title}</a>
              </h3>
              <p>{paper.authors.join(', ')}</p>
              <p>{paper.journal}</p>
            </article>
          );
        })}
      </div>
      <span data-id='right-arrow' onClick={swipeCarousel}>
        <FontAwesomeIcon icon={faChevronRight} />
      </span>
    </section>
  );
};
