import React from 'react';
import Navbar from '../Components/Navbar';
import ScrollingText from '../Components/ScrollingText';
import Works from './Works';
import Benefits from './Benefits';
import Reasons from './Reasons';
import Questions from './Questions';
import Footer from './Footer';



const Home = () => {
  return (
    <main className='bg-black'>
      <ScrollingText />
      <div className="border-l border-r border-[#212121] px-2 border-solid  mx-auto max-w-6xl">
        <Navbar />
        <Works />
        <Benefits />
        <Reasons />
        <Questions />
        <h3 className='text-bold bg-red-coral-900'>love jesus</h3>
      </div>
      <Footer />
    </main>
  );
};

export default Home;
