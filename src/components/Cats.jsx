import { React, useRef } from 'react';
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
  const adoptionForm = useRef();
  const submitBtn = useRef();
  const fillOutForm = (cat) => {
    const formElement = adoptionForm.current;
    const formData = new FormData(formElement);

    // Set form field value and display it
    formData.set('fullName', cat.name);
    formElement.querySelector('[name="catName"]').value = cat.name;
  };
  return (
    <>
      <section className='cats'>
        <h2>cats for rehoming</h2>
        <span
          className='carouselArrow'
          data-id='left-arrow'
          onClick={swipeCarousel}
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </span>
        <div>
          {cats.map((cat) => {
            return (
              <article key={cat._id}>
                <figure>
                  <img src={catAdoption} alt={cat.name} />
                  <figcaption>
                    <p onClick={() => fillOutForm(cat)}>{cat.name}</p>
                    <p>
                      {cat.age ? `${Math.round(cat.age / 12)} yo` : ''}{' '}
                      {cat.sex}
                    </p>
                    <p>{cat?.colour}</p>
                    <span>
                      {cat.vaccinated ? (
                        <FontAwesomeIcon icon={faSyringe} />
                      ) : (
                        ''
                      )}
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
                  <p className='btn' onClick={() => fillOutForm(cat)}>
                    <span>
                      <FontAwesomeIcon icon={faHandHoldingHeart} />
                    </span>
                    adopt me
                  </p>
                </details>
              </article>
            );
          })}
        </div>
        <span
          className='carouselArrow'
          data-id='right-arrow'
          onClick={swipeCarousel}
        >
          <FontAwesomeIcon icon={faChevronRight} />
        </span>
      </section>
      <section className='adoptionForm'>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            submitBtn.current.classList.add('subscribed');
            submitBtn.current.value = "We'll be in touch soon!";
          }}
          name='adoptionForm'
          id='adoptionForm'
          ref={adoptionForm}
        >
          <label htmlFor='catName'>I would like to adopt: </label>
          <input
            type='text'
            id='catName'
            name='catName'
            placeholder='Pick a cat to adopt'
            required
            disabled
          />
          <label htmlFor='fullName'>Full Name</label>
          <input type='text' id='fullName' name='fullName' required />
          <label htmlFor='emailAddress'>Email</label>
          <input type='email' id='emailAddress' name='emailAddress' required />
          <label htmlFor='phoneNumber'>Phone</label>
          <input type='tel' id='phoneNumber' name='phoneNumber' required />
          <input
            ref={submitBtn}
            type='submit'
            value='send'
            className='btn primaryBtn'
          />
        </form>
        <p>
          <strong>T&C</strong>: By filling in this form I agree with privacy
          policy, terms and conditions, including to pay an{' '}
          <strong>adoption fee</strong> minimum <strong>£100</strong> donation
          for Adult cats and <strong>£120</strong> for Kittens if I am lucky
          enough to successful . (All cats re-homed will he fully vaccinated,
          neutered, micro-chipped and up to date with flea and worm treatments
          which cost in excess of £150) What will we do with this information ?
          Our application form is used to screen potential adopters for
          suitability, and to help us match a suitable cat to each adopter By
          finding a cat who's personality and needs match up with the
          personality and lifestyle of the adopter, we can help ensure that
          adoptions will be successful. This form will be retained for{' '}
          <strong>6 months</strong>, after which time it will be disposed of
          securely You information will always be held securely and according to
          GDPR.
        </p>
      </section>
    </>
  );
};
