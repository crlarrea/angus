import React from 'react';
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import catAnimation from '../assets/img/cat.json'
export const PageNotFound = () => {
  return (
    <section className='pageNotFound'>
      <h2>Do you like the look of this demo?</h2>
      <p>Get in touch with us</p>
      <address>
        <a href='mailto:hello@long-lane.co.uk'>hello@long-lane.co.uk</a>
        <a href='https://www.long-lane.co.uk' target='_blank'>
          long-lane.co.uk
        </a>
      </address>
      <Player autoplay loop speed='0.2' src={catAnimation}>
        <Controls
          visible={false}
          buttons={['play', 'repeat', 'frame', 'debug']}
          speed='0.5'
        />
      </Player>
    </section>
  );
};
