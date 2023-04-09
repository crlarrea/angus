import React from 'react';
import { NavLink } from 'react-router-dom';
export const HowAdoptionWorks = () => {
  const stepsToAdoption = [
    {
      stepName: 'choose a cat',
      stepDescription:
        'We always have a variety of  cats looking for homes. Some require access to the outdoors whereas others are indoor only.',
    },
    {
      stepName: 'fill out the form',
      stepDescription:
        'Fill out our adoption application form with your detailas and specifications. We will try to contact you within 2-3 weeks days to discuss your application and arrange a home check.',
    },
    {
      stepName: 'pay a fee',
      stepDescription:
        'We request  a minimum £100 donation for adult cats and £120 for kittens.',
    },
    {
      stepName: 'home visit',
      stepDescription: 'We carry out a home visit to ensure suitability.',
    },
    {
      stepName: 'meet the cat',
      stepDescription: 'Take your newly adopted cat home!',
    },
  ];
  return (
    <section className='howAdoptionWorks'>
      <article></article>

      <article>
        <h2>how adoption works</h2>
        <ul>
          {stepsToAdoption.map((item, index) => {
            return (
              <li key={index}>
                <details>
                  <summary>
                    step {index + 1}: {item.stepName}
                  </summary>
                  <p>
                    {item.stepDescription}
                    {index + 1 === 1 ? (
                      <NavLink className='btn secondaryBtn' to={'/adoption'}>
                        cats for adoption
                      </NavLink>
                    ) : index + 1 === 2 ? (
                      <NavLink className='btn secondaryBtn' to={'/adoption'}>
                        adoption application form
                      </NavLink>
                    ) : index + 1 === 3 ? (
                      <NavLink
                        className='btn secondaryBtn'
                        to={'/adoption/pay-fee'}
                      >
                        pay fee
                      </NavLink>
                    ) : (
                      ''
                    )}
                  </p>
                </details>
              </li>
            );
          })}
        </ul>
        <div>
          <h3>Have you got questions about adoption?</h3>
          <p>Check out our FAQ or reach out to us</p>
          <NavLink className='btn secondaryBtn' to={'/adoption/faq'}>
            FAQ: adoption
          </NavLink>
        </div>
      </article>
    </section>
  );
};
