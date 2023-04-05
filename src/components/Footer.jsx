import { React, useRef } from 'react';
import logo from '../assets/img/opt_logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faInstagram,
  faFacebook,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';

export const Footer = () => {
  const emailPattern = '^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$';
  const subscribeBtn = useRef(null);
  const subscribeEmail = useRef(null);
  const subscribeToNewsletter = (e) => {
    e.preventDefault();
    if (new RegExp(emailPattern).test(subscribeEmail.current.value)) {
      console.log('subscribed');
      subscribeBtn.current.classList.remove('notSubscribed');
      subscribeBtn.current.classList.add('subscribed');
      subscribeBtn.current.value = 'thank you!';
    }
  };
  const resetEmailInput = (e) => {
    e.target.value = '';
    subscribeBtn.current.classList.remove('subscribed');
    subscribeBtn.current.classList.add('notSubscribed');
    subscribeBtn.current.value = 'subscribe';
  };
  return (
    <>
      <article>
        <h2>get in touch</h2>
        <ul>
          <li>
            <a href='mailto:info@anguscatrescue.co.uk'>
              Email: info@anguscatrescue.co.uk
            </a>
          </li>
          <li>
            <a href='phone:+447982064765'>Mobile: 079 820 64765</a>
          </li>
        </ul>
        <form onSubmit={(e) => subscribeToNewsletter(e)}>
          <label htmlFor='newsletter'>
            <h2>subscribe to our newsletter</h2>
          </label>
          <article>
            <input
              type='email'
              name='newsletter'
              id='newsletter'
              pattern={emailPattern}
              minLength='6'
              ref={subscribeEmail}
              required
              onFocus={(e) => resetEmailInput(e)}
            />
            <label htmlFor='subscribeNewsletter'></label>
            <input
              type='submit'
              name='submitNewsletter'
              id='submitNewsletter'
              value='subscribe'
              ref={subscribeBtn}
              className='btn notSubscribed'
            />
          </article>
        </form>
      </article>
      <article>
        <img src={logo} alt='Angus Cat Rescue Logo' />
      </article>
      <article>
        <ul>
          <li>
            <a
              href='https://www.instagram.com/anguscatrescue'
              target='_blank'
              rel='noopener noreferrer'
            >
              <span>
                <FontAwesomeIcon icon={faInstagram} />
              </span>
            </a>
          </li>

          <li>
            <a
              href='https://www.facebook.com/AngusCatRescue/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <span>
                <FontAwesomeIcon icon={faFacebook} />
              </span>
            </a>
          </li>

          <li>
            <a
              href='https://twitter.com/AngusCatRescue'
              target='_blank'
              rel='noopener noreferrer'
            >
              <span>
                <FontAwesomeIcon icon={faTwitter} />
              </span>
            </a>
          </li>
        </ul>
        <p>
          Get in touch with <strong>Angus Cat Rescue</strong> to learn more
          about our work and find out how to donate.
          <br />
          We appreciate your support!
        </p>
        <p>&copy; {new Date().getFullYear()}</p>
      </article>
    </>
  );
};
