import React from 'react';

const Works = () => {
  return (
    <div className='text-white flex pb-11'>
      <div className='flex-1 border-r border-[#212121] pr-8'>
        <div>
          <h3 className='text-[#B6F848] font-semibold'>HOW IT WORKS</h3>
          <p className='text-4xl pt-7'>Steps to make it easier for you</p>
        </div>
        <div className='flex mt-11 space-x-9 space-y-6'>
          <div className='pt-11'>
            <h5 className='text-2xl'>AlfateksTrade is fully insured and regulated</h5>
            <p className='text-[#959595]'>AlfateksTrade is a multi-regulated broker, AlfateksTrade is trusted by millions of users</p>
            <p className='text-[#959595]'>AlfateksTrade is fully insured against possible losses</p>
          </div>
          <div>
            <h3 className='text-2xl'>Get Crypto Backed Loans Up to $1.5m</h3>
            <p className='text-[#959595]'>AlfateksTrade provides security loans to our elite investors who hold a running Elite Investment portfolio.</p>
          </div>
        </div>
      </div>

      {/* second content */}

      <div className='flex-1 pl-2 mt-[9%] pb-11'>
        <div className=''>
          <h3 className='text-2xl'>New to Bitcoin and cryptocurrencies? No problem.</h3>
          <p className='text-[#959595]'>Our crypto guides will help get you up to speed.</p>
          <p className='text-[#959595]'>Our resource center will help guide you through the basics of trading and investing in crypto and how it's changing the way the world thinks about money and finance.</p>
          <a href="./">See More Details</a>
        </div>
        <div className='flex mt-11'>
          <div>
            <h1 className='text-2xl'>Risk Free Investment Options</h1>
            <p className='text-[#959595]'>AlfateksTrade offers risk-proof investment portfolio management, available for users worldwide</p>
          </div>
          <div>
            <h3 className='text-2xl'>Instant Withdrawals to fiat</h3>
            <p className='text-[#959595]'>You can quickly withdraw your funds at any time. Funds withdrawals are processed instantly.</p>
          </div>
        </div>
      </div>

    </div>

  )
}

export default Works