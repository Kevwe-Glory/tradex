import React from 'react'
import {Logo} from '../asset/icons/Icons.js'

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
]
  return (
    <footer className='bg-[#191919] mt-[14%] pb-[3%]'>
      <div className="flex p-[9%] gap-7">
      <div>
        <div className='w-[459px]'>
          <a href='/'>
              <img src={Logo} alt='logo' width={150} height={46} />
          </a>
          <p className='text-[#959595]'>838 Lai Chi Kok Road Laford Centre Cheung Sha Wan Kowloon, Hong Kong</p>
        </div>
      </div>

      <div className='flex'>
      {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className='font-montserrat text-2xl w-[250px] leading-normal font-medium mb-6 text-white'>
                {section.title}
              </h4>
              <ul>
                {section.links.map((link) => (
                  <li
                    className='mt-3 text-[#959595] font-montserrat text-base leading-normal text-white-400 hover:text-[#B6F848]'
                    key={link.name}
                  >
                    <a href={link.link}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
      </div>
      </div>
      
    </footer>
  )
}

export default Footer