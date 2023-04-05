import React from 'react';

import { Hero } from './Hero';
import { HowAdoptionWorks } from './HowAdoptionWorks';
import { CatWelfare } from './CatWelfare';
import { Contributions } from './Contributions';
import donation from '../assets/img/donation.png';
import volunteer from '../assets/img/volunteer.png';
import foster from '../assets/img/foster.png';

export const Home = () => {
  const welfareArticles = [
    {
      article_id: crypto.randomUUID(),
      title: 'Why should I get my girl cat neutered?',
      authors: ['ACR author 1', 'ACR author 2'],
      journal: 'ACR source',
      articleImg:
        'https://plus.unsplash.com/premium_photo-1677545182425-4fb12bdb9faf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80',
    },
    {
      article_id: crypto.randomUUID(),
      title: 'pet safety',
      authors: ['ACR author 1', 'ACR author 2'],
      journal: 'ACR source',
      articleImg:
        'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1443&q=80',
    },
    {
      article_id: crypto.randomUUID(),
      title: 'the benefits of cat neutering',
      authors: ['ACR author 1', 'ACR author 2'],
      journal: 'ACR source',
      articleImg:
        'https://media.istockphoto.com/id/1333388556/photo/shocked-orange-thai-cat-cat-lying-sideways-on-background-shocked-cat.jpg?s=1024x1024&w=is&k=20&c=FWSQ6pWTqJvBs-PMd-zTgwPqzpdhSOffKvOUxIpt8ts=',
    },
    {
      article_id: crypto.randomUUID(),
      title: 'neutering and the endangered scottish wild cats',
      authors: ['ACR author 1', 'ACR author 2'],
      journal: 'ACR source',
      articleImg:
        'https://media.istockphoto.com/id/1023732798/photo/profile-buff-tabby-playful-kitten.jpg?s=1024x1024&w=is&k=20&c=jnKe6264V7aA_v2TjACxQ2sCAdaUUyLl3QHn8TudSCI=',
    },
    {
      article_id: crypto.randomUUID(),
      title: 'neutering and the endangered scottish wild cats',
      authors: ['ACR author 1', 'ACR author 2'],
      journal: 'ACR source',
      articleImg:
        'https://media.istockphoto.com/id/1064888424/photo/the-cat-looks-out-cat-on-white-background-peeks-around-the-corner.jpg?s=1024x1024&w=is&k=20&c=oKRveQWCR0fvKx5wVWcL1S4IVNM5Yj2drOuSafWk8GA=',
    },
    {
      article_id: crypto.randomUUID(),
      title: 'neutering and the endangered scottish wild cats',
      authors: ['ACR author 1', 'ACR author 2'],
      journal: 'ACR source',
      articleImg:
        'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1443&q=80',
    },
    {
      article_id: crypto.randomUUID(),
      title: 'neutering and the endangered scottish wild cats',
      authors: ['ACR author 1', 'ACR author 2'],
      journal: 'ACR source',
      articleImg:
        'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1443&q=80',
    },
    {
      article_id: crypto.randomUUID(),
      title: 'neutering and the endangered scottish wild cats',
      authors: ['ACR author 1', 'ACR author 2'],
      journal: 'ACR source',
    },
    {
      article_id: crypto.randomUUID(),
      title: 'neutering and the endangered scottish wild cats',
      authors: ['ACR author 1', 'ACR author 2'],
      journal: 'ACR source',
    },
  ];
  const contributions = [
    {
      id: crypto.randomUUID(),
      title: 'Become a volunteer',
      description: 'Become a volunteer and help cats in need in our community.',
      btn: 'volunteer',
      img: volunteer,
    },
    {
      id: crypto.randomUUID(),
      title: 'Make a donation',
      description: 'Help us with a one-off or monthly donation.',
      btn: 'donate',
      img: donation,
    },
    {
      id: crypto.randomUUID(),
      title: 'Become a foster parent',
      description:
        'Every thought about re-homing an older cat? You may be eligible for free vets bills.',
      btn: 'foster',
      img: foster,
    },
  ];
 
  return (
    <section className='Home'>
      <Hero />
      <Contributions contributions={contributions} />
      <HowAdoptionWorks />
      <CatWelfare publications={welfareArticles} />
    </section>
  );
};
