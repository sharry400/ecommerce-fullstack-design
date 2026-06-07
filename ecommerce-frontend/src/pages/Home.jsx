
import React from 'react';
import Hero from '../components/Hero';
import FlashSales from '../components/FlashSales';
import Categories from '../components/Categories';
import BestSelling from '../components/BestSelling';
import PromoBanner from '../components/PromoBanner';
import ExploreProducts from '../components/ExploreProducts';
import Services from '../components/Services';

const Home = () => {
  return (
    <>
      <Hero />
      <FlashSales />
      <Categories />
      <BestSelling />
      <PromoBanner />
      <ExploreProducts />
      <Services />
    </>
  );
};

export default Home;