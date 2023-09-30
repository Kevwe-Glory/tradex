import React from 'react';
import { Hero } from '../asset/images/Images';
import { Ai, Circle, Code, Earth, Treva, Velocity, Logo } from '../asset/icons/Icons';


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
  return (
    <>
      <nav className=" text-white pt-6">
        <div className="container mx-auto flex items-center justify-between p-4">
          <div>
            <img src={Logo} alt="Logo" className="h-8" />
          </div>
          <div className="space-x-4">
            <ul className="flex space-x-4">
              <li className="relative group">
                <span className="cursor-pointer">Investment Solutions</span>
                <ul className="hidden absolute left-0 mt-2 space-y-2 bg-gray-800 text-white group-hover:block">
                  <li><a href="#">Option 1</a></li>
                  <li><a href="#">Option 2</a></li>
                  <li><a href="#">Option 3</a></li>
                </ul>
              </li>
              <li className="relative group">
                <span className="cursor-pointer">Account Option</span>
                <ul className="hidden absolute left-0 mt-2 space-y-2 bg-gray-800 text-white group-hover:block">
                  <li><a href="#">Option 1</a></li>
                  <li><a href="#">Option 2</a></li>
                  <li><a href="#">Option 3</a></li>
                </ul>
              </li>
              <li className="relative group">
                <span className="cursor-pointer">Company Information</span>
                <ul className="hidden absolute left-0 mt-2 space-y-2 bg-gray-800 text-white group-hover:block">
                  <li><a href="#">Option 1</a></li>
                  <li><a href="#">Option 2</a></li>
                  <li><a href="#">Option 3</a></li>
                </ul>
              </li>
            </ul>
          </div>
          <div>
            <AppButton />
          </div>
        </div>
      </nav>
      <div className='flex pt-[80px] '>
        <div className='text-white'>
          <h3 className='text-4xl'>Earn Weekly Profits From Your Crypto,</h3>
          <h3 className='text-4xl mt-5'>Get Crypto Backed Loan Anytime</h3>
          <p className='mt-11'>Now earn up to 36% interest on USD stablecoins or crypto weekly, borrow USD stablecoins, and trade in over 100 cryptocurrencies, all-in-one simple, secure and trusted place.
          </p>
          <button className='bg-[#B6F848] rounded-lg text-black py-2 px-4 mt-7'>Get Started Now</button>
        </div>
        <div>
          <img src={Hero} alt="hero" />
        </div>
      </div>
      <div className=' bg-[#191919] p-4 md:p-8'>
        <h3 className="text-center text-white text-2xl">TRUSTED BY OVER 200K USERS WORLDWIDE</h3>
        <div className="flex flex-wrap justify-between pt-9  space-x-4 md:space-x-8">
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
