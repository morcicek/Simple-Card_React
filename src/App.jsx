import { useState } from 'react';
import './index.css';
import data from './util/data';
import Card from './components/Card';
import Footer from './components/Footer';
import Header from './components/Header';
import './scss/App.scss';

function App() {
  return (
    <>
      <Header />
      <Card data={data} />
      <Footer />
    </>
  );
}

export default App;
