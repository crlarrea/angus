import React from 'react';
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import { Nav } from '../components/Nav';
import { Home } from '../components/Home';
import { Adoption } from '../components/Adoption';
import { HelpUs } from '../components/HelpUs';
import { Shop } from '../components/Shop';

import { Contact } from '../components/Contact';

import { PageNotFound } from '../components/PageNotFound';
import { Footer } from '../components/Footer';

export const MainRoutes = () => (
  <>
    <BrowserRouter>
      <header>
        <Nav />
      </header>

      <main>
        <Routes>
          <Route path='/' element={<Navigate to='/home' />} />
          <Route path='/home' element={<Home />} />
          <Route path='/adoption' element={<Adoption />} />
          <Route path='/help-us' element={<HelpUs />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/shop' element={<Shop />} />

          <Route path='/*' element={<PageNotFound />} />
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </BrowserRouter>
  </>
);
