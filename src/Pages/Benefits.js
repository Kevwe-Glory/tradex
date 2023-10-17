import React from 'react';

const Benfits = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center text-center">
        <h3 className="text-[#B6F848] text-2xl">BENEFITS WITH US</h3>
        <h1 className="text-white pt-9 text-4xl">Featured in Forbes as a ranking investor platform</h1>
        <p className="text-[#959595] pt-6">
          Last year was amazing for us as we were listed by Forbes, Bloomberg,
          Wall Street Journal as a reputed investor platform.
        </p>
        <p className="text-[#959595] pt-5">This year promises to be even better.</p>
      </div>


      <div className="mt-11 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 grid-rows-2 p-8 border-t border-r border-l border-[#575555]">
        <div className="text-[#959595] border-b border-r border-[#575555] text-center p-6 hover:bg-[#B6F848]">
          <h2 className="text-2xl font-semibold">75m+</h2>
          <p>Series B Funding Raised</p>
        </div>
        <div className="text-[#959595] border-b border-r border-[#575555] text-center p-6 hover:bg-[#B6F848]">
          <h2 className="text-2xl font-semibold">120+</h2>
          <p>Millionaires We Raised</p>
        </div>
        <div className="text-[#959595] border-b border-r border-[#575555] text-center p-6 hover:bg-[#B6F848]">
          <h2 className="text-2xl font-semibold">200K+</h2>
          <p>Users Who Trust Us</p>
        </div>
        <div className="text-[#959595] border-b border-r border-[#575555] text-center p-6 hover:bg-[#B6F848]">
          <h2 className="text-2xl font-semibold">98%</h2>
          <p>Loan Approval Rating</p>
        </div>
        <div className="text-[#959595] border-b border-r border-[#575555] text-center p-6 hover:bg-[#B6F848]">
          <h2 className="text-2xl font-semibold">35%</h2>
          <p>Investment Profitability</p>
        </div>
        <div className="text-[#959595] border-b border-r border-[#575555] text-center p-6 hover:bg-[#B6F848]">
          <h2 className="text-2xl font-semibold">100%</h2>
          <p>Instant Withdrawals</p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row">
  {/* Parent div with a right border */}
  <div className="border-r border-[#212121] p-4 md:flex-grow">
    <div className="p-4">
      <h3 className="text-[#B6F848] font-semibold text-center md:text-left">ABOUT ALFATEKSTRADE</h3>
      <h3 className="text-center md:text-left text-white">We have built a stable, reliable platform</h3>
      <p className="text-[#959595] md:text-left">Earning the trust of our clients has always been our highest priority. We earn that trust through the best security in the business — most of our crypto is held safely in cold wallets so bad actors can't reach it.</p>
      <p className="text-[#959595] md:text-left pt-5">Our platform provides world-class financial stability by maintaining full reserves, healthy banking relationships, and the highest standards of legal compliance.</p>
    </div>
  </div>
  <div className="flex-grow p-4 text-white">
    graph
  </div>
</div>



      {/* <div className="flex">

        <div className="border-r border-[#212121] p-4">
          <div className="flex-grow p-4">
            <h3 className='text-[#B6F848] font-semibold'>ABOUT ALFATEKSTRADE</h3>
            <h3>We have built a stable, reliable platform</h3>
            <p className='text-[#959595]'>Earning the trust of our clients has always been our highest priority. We earn that trust through the best security in the business — most of our crypto is held safely in cold wallets so bad actors can't reach it.</p>
            <p className='text-[#959595] pt-5'>Our platform provides world class financial stability by maintaining full reserves, healthy banking relationships and the highest standards of legal compliance.</p>
          </div>
          <div className="flex-grow p-4 text-white">
            graph
          </div>
        </div>
      </div> */}


    </div>
  );
};

export default Benfits;
