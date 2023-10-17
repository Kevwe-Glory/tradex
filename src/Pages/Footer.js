import React from 'react';
import { Logo } from '../asset/icons/Icons.js';

const Footer = () => {
  const footerLinks = [
    {
      title: "Company",
      links: [
        { name: "Why choose us", link: "/" },
        { name: "Contact us", link: "/" },
        { name: "Careers", link: "/" },
        { name: "DEVELOPER API", link: "/" },
      ],
    },
    {
      title: "Where to buy cryptocurrency",
      links: [
        { name: "Coinbase", link: "/" },
        { name: "Binance", link: "/" },
        { name: "Kareken", link: "/" },
      ],
    },
    {
      title: "Partners",
      links: [
        { name: "AlfateksTrade Loans", link: "/" },
        { name: "Invest in crypto", link: "/" },
        { name: "Chat an account manager", link: "/" },
      ],
    },
  ];

  return (
    <footer className='bg-[#191919] mt-[14%] pb-[3%]'>
      <div className="flex flex-col md:flex-row p-4 md:p-[9%] gap-4 md:gap-7">
        <div className='w-full md:w-1/2 md:flex-shrink-0'>
          <a href='/'>
            <img src={Logo} alt='logo' width={150} height={46} />
          </a>
          <p className='text-[#959595] text-center md:text-left mt-4 md:mt-0'>
            838 Lai Chi Kok Road Laford Centre Cheung Sha Wan Kowloon, Hong Kong
          </p>
        </div>

        {footerLinks.map((section) => (
          <div
            key={section.title}
            className={`w-full md:w-1/4 md:text-center md:py-8 ${!section.links && 'sm:py-10'}`}
          >
            <h4 className='font-montserrat text-2xl md:text-3xl font-medium mb-4 text-white'>
              {section.title}
            </h4>
            <ul>
              {section.links.map((link) => (
                <li
                  className='mt-2 md:mt-3 text-[#959595] font-montserrat text-base leading-normal text-white-400 hover:text-[#B6F848]'
                  key={link.name}
                >
                  <a href={link.link}>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <hr className='border-[#474747] pt-9'/>
      <p className='text-[#959595]'>© 2022 AlfateksTrade by 
      <span className='text-white text-sm'>Fusion_technologies.</span> All Rights Reserved.</p>
    </footer>
  );
}

export default Footer;
