import React from 'react';

const Works = () => {
  return (
    <div className='text-white flex flex-col md:flex-row md:space-x-8 md:space-y-0 pb-11'>

      {/* First Content */}
      <div className='md:w-1/2 border-r border-[#212121] pr-8 md:pr-4'>
        <div>
          <h3 className='text-[#B6F848] font-semibold text-2xl md:text-3xl'>HOW IT WORKS</h3>
          <p className='text-4xl pt-2 md:pt-4 md:text-5xl'>Steps to make it easier for you</p>
        </div>
        <div className='flex flex-row mt-4 md:flex-col md:space-x-4 md:space-y-0'>
          <div>
            <h5 className='text-2xl'>AlfateksTrade is fully insured and regulated</h5>
            <p className='text-[#959595]'>AlfateksTrade is a multi-regulated broker, trusted by millions of users</p>
            <p className='text-[#959595]'>Fully insured against possible losses</p>
          </div>
          <div>
            <h3 className='text-2xl'>Get Crypto Backed Loans Up to $1.5m</h3>
            <p className='text-[#959595]'>Provides security loans to elite investors with a running Elite Investment portfolio.</p>
          </div>
        </div>
      </div>

      {/* Second Content */}
      <div className='md:w-1/2 pl-2 md:pl-4 mt-4 md:mt-0'>
        <div>
          <h3 className='text-2xl md:text-3xl'>New to Bitcoin and cryptocurrencies? No problem.</h3>
          <p className='text-[#959595]'>Our crypto guides will help get you up to speed.</p>
          <p className='text-[#959595]'>Our resource center will guide you through the basics of trading and investing in crypto.</p>
          <a href="./" className='text-[#B6F848] hover:text-[#959595]'>See More Details</a>
        </div>
        <div className='flex flex-row mt-4 md:flex-col md:space-x-4 md:space-y-0'>
          <div>
            <h1 className='text-2xl'>Risk-Free Investment Options</h1>
            <p className='text-[#959595]'>AlfateksTrade offers risk-proof investment portfolio management, available worldwide</p>
          </div>
          <div>
            <h3 className='text-2xl'>Instant Withdrawals to Fiat</h3>
            <p className='text-[#959595]'>Quickly withdraw your funds at any time. Funds withdrawals are processed instantly.</p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Works;
