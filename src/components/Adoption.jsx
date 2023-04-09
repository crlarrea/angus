import React from 'react';
import { Cats } from './Cats';

export const Adoption = () => {
  const cats = [
    {
      _id: '6428bde8baf75b80f5c9ef51',
      img: 'https://plus.unsplash.com/premium_photo-1677545182425-4fb12bdb9faf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80',
      name: 'Trevor',
      age: 70,
      neutered: true,
      microchipped: true,
      children: false,
      colour: 'blond',
      environment: 'indoor',
      personality: 'timid',
      vaccinated: true,
      sex: 'male',
      other_pets: true,
      description:
        'Trevor is a handsome lad of 5/6 years young, he has been neutered, microchipped,fully vaccinated and has also had dental treatment that was required. He is a bit of a timid lad until he gets to know you but will flourish with an understanding home on his own where he can be very spoilt and no young children sorry',
      available: '2023-04-03T12:04:19.531Z',
    },
    {
      _id: '6428bde8baf75b80f5c9ef52',
      img: 'https://plus.unsplash.com/premium_photo-1677545182425-4fb12bdb9faf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80',
      name: 'Sausage',
      age: 50,
      neutered: true,
      microchipped: true,
      children: false,
      colour: 'black and white',
      environment: 'indoor',
      personality: 'timid',
      vaccinated: true,
      sex: 'male',
      other_pets: true,
      description:
        'Sausage had a wee trip down to the vets for his 2nd vaccinations. I’m now ready for a new home of my own',
      available: '2023-04-03T12:04:19.531Z',
    },
    {
      _id: '6428bde8baf75b80f5c9ef53',
      img: 'https://plus.unsplash.com/premium_photo-1677545182425-4fb12bdb9faf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80',
      name: 'Nora Batty',
      age: 24,
      neutered: true,
      microchipped: true,
      children: false,
      colour: 'black and white',
      environment: 'indoor',
      personality: 'timid',
      vaccinated: true,
      sex: 'female',
      other_pets: true,
      description:
        'Nora Batty is. Gorgeous girl of 18/24 months she has always been an indoor girl so this is what we are looking for her.   She is a bit of a timid girl till she gets to know you. An adult home or one will older children would be best, she has lived with other cats and a dog.',
      available: '2023-04-03T12:04:19.531Z',
    },
    {
      _id: '6428bde8baf75b80f5c9ef54',
      img: 'https://plus.unsplash.com/premium_photo-1677545182425-4fb12bdb9faf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80',
      name: 'Trevor',
      age: 70,
      neutered: true,
      microchipped: true,
      children: false,
      colour: 'blond',
      environment: 'indoor',
      personality: 'timid',
      vaccinated: true,
      sex: 'male',
      other_pets: true,
      description:
        'Trevor is a handsome lad of 5/6 years young, he has been neutered, microchipped,fully vaccinated and has also had dental treatment that was required. He is a bit of a timid lad until he gets to know you but will flourish with an understanding home on his own where he can be very spoilt and no young children sorry',
      available: '2023-04-03T12:04:19.531Z',
    },
    {
      _id: '6428bde8baf75b80f5c9ef55',
      img: 'https://plus.unsplash.com/premium_photo-1677545182425-4fb12bdb9faf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80',
      name: 'Sausage',
      age: 50,
      neutered: true,
      microchipped: true,
      children: false,
      colour: 'black and white',
      environment: 'indoor',
      personality: 'timid',
      vaccinated: true,
      sex: 'male',
      other_pets: true,
      description:
        'Sausage had a wee trip down to the vets for his 2nd vaccinations. I’m now ready for a new home of my own',
      available: '2023-04-03T12:04:19.531Z',
    },
    {
      _id: '6428bde8baf75b80f5c9ef56',
      img: 'https://plus.unsplash.com/premium_photo-1677545182425-4fb12bdb9faf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80',
      name: 'Nora Batty',
      age: 24,
      neutered: true,
      microchipped: true,
      children: false,
      colour: 'black and white',
      environment: 'indoor',
      personality: 'timid',
      vaccinated: true,
      sex: 'female',
      other_pets: true,
      description:
        'Nora Batty is. Gorgeous girl of 18/24 months she has always been an indoor girl so this is what we are looking for her.   She is a bit of a timid girl till she gets to know you. An adult home or one will older children would be best, she has lived with other cats and a dog.',
      available: '2023-04-03T12:04:19.531Z',
    },
  ];
  return (
    <section>
      <Cats cats={cats} />
    </section>
  );
};
