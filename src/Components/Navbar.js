import React, { useState } from 'react';
import { Hero } from '../asset/images/Images';
import { Ai, Circle, Code, Earth, Treva, Velocity, Logo } from '../asset/icons/Icons';
import { Link } from 'react-router-dom';


const AppButton = () => {
  const telegramLink = 'YOUR_TELEGRAM_LINK_HERE'; // Replace with your Telegram link
  return (
    <a
      href={telegramLink}
      className="bg-[#B6F848] text-black py-2 px-4 rounded-lg shadow-md"
    >
      Chat Support
    </a>
  );
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      {/* <nav className="text-white pt-6">
  <div className="container mx-auto flex flex-col md:flex-row items-center justify-between p-4">
    <div className="flex items-center">
      <img src={Logo} alt="Logo" className="h-8" />
    </div>

    <div className="tex-red flex items-center md:hidden">

    </div>

    <div className="space-x-4 mt-4 md:mt-0">
      <ul className="md:flex space-x-4">
        <li className="relative group">
          <span className="cursor-pointer">Investment Solutions</span>
          <ul className="hidden absolute left-0 mt-2 space-y-2 bg-gray-800 text-white group-hover:block md:relative md:bg-transparent md:text-white md:space-y-0 md:group-hover:hidden">
            <li><Link to="/404">Earn Weekly Income</Link></li>
            <li><Link to="/404">Copy Trading</Link></li>
            <li><Link to="/404">Crypto-backed loan</Link></li>
            <li><Link to="/login">Login</Link></li>
          </ul>
        </li>
        <li className="relative group">
          <span className="cursor-pointer">Account Option</span>
          <ul className="hidden absolute left-0 mt-2 space-y-2 bg-gray-800 text-white group-hover:block md:relative md:bg-transparent md:text-white md:space-y-0 md:group-hover:hidden">
            
          </ul>
        </li>
        <li className="relative group">
          <span className="cursor-pointer">Company Information</span>
          <ul className="hidden absolute left-0 mt-2 space-y-2 bg-gray-800 text-white group-hover:block md:relative md:bg-transparent md:text-white md:space-y-0 md:group-hover:hidden">
           
          </ul>
        </li>
      </ul>
    </div>
    <div>
      <AppButton />
    </div>
  </div>
</nav> */}



      <nav className="text-white pt-6">
        <div className="container mx-auto flex items-center justify-between p-4">
         

          <div className="text-red flex items-center">
            <button className="block md:hidden" onClick={toggleMenu}>
              {/* Add a mobile menu toggle button */}
              {isMenuOpen ? 'Close' : 'Menu'}
            </button>
          </div>

          <div className={`space-x-4 ${isMenuOpen ? 'block' : 'hidden'} md:flex md:space-x-4`}>
            <ul className="flex space-x-4">
              <li className="relative group">
                <span className="cursor-pointer">Investment Solutions</span>
                <ul className="hidden absolute left-0 mt-2 space-y-2 bg-gray-800 text-white group-hover:block">
                  <li><Link to="/404">Earn Weekly Income</Link></li>
                  <li><Link to="/404">Copy Trading</Link></li>
                  <li><Link to="/404">Crypto-backed loan</Link></li>
                  <li><Link to="/login">Login</Link></li>
                </ul>
              </li>
              <li className="relative group">
                <span className="cursor-pointer">Account Option</span>
                <ul className="hidden absolute left-0 mt-2 space-y-2 bg-gray-800 text-white group-hover:block">
                  {/* Add account-related links */}
                </ul>
              </li>
              <li className="relative group">
                <span className="cursor-pointer">Company Information</span>
                <ul className="hidden absolute left-0 mt-2 space-y-2 bg-gray-800 text-white group-hover:block">
                  {/* Add company-related links */}
                </ul>
              </li>
            </ul>
          </div>

          <div>
            <AppButton />
          </div>
        </div>
      </nav>

<div className='flex flex-col-reverse md:flex-row pt-[80px]'>
  <div className='md:w-1/2'>
    <img src={Hero} alt="hero" className='w-full' />
  </div>
  <div className='text-white md:w-1/2 px-4 md:text-left'>
    <h3 className='text-4xl font-bold'>Earn Weekly Profits From Your Crypto,</h3>
    <h3 className='text-4xl mt-5'>Get Crypto Backed Loans Anytime🧧</h3>
    <p className='mt-5 md:mt-11'>Now earn up to 36% interest on USD stablecoins or crypto weekly, borrow USD stablecoins, and trade in over 100 cryptocurrencies, all-in-one simple, secure and trusted place.</p>
    <button className='bg-[#B6F848] rounded-lg text-black py-2 px-4 mt-5 md:mt-7'>Get Started Now</button>
  </div>
</div>


      <div className='bg-[#191919] p-10 md:p-8'>
        <h3 className="text-center text-white text-2xl">TRUSTED BY OVER 200K USERS WORLDWIDE</h3>
        <div className="flex flex-wrap justify-center pt-4 md:pt-9 space-x-4 md:space-x-8">
          <img src={Velocity} alt="9" className="w-24 h-auto md:w-32 md:h-auto mb-4" />
          <img src={Circle} alt="circle" className="w-24 h-auto md:w-32 md:h-auto mb-4" />
          <img src={Code} alt="code" className="w-24 h-auto md:w-32 md:h-auto mb-4" />
          <img src={Earth} alt="2.0" className="w-24 h-auto md:w-32 md:h-auto mb-4" />
          <img src={Treva} alt="treva" className="w-24 h-auto md:w-32 md:h-auto mb-4" />
          <img src={Ai} alt="ai" className="w-24 h-auto md:w-32 md:h-auto mb-4" />
        </div>
      </div>
    </>
  );
};

export default Navbar;

