import React from 'react';

const ScrollingHeader = () => {
  const marqueeStyle = {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    boxSizing: 'border-box',
    animation: 'marquee 15s linear infinite',
  };

  return (
    <div className=" text-[#B6F848] py-2">
      <div style={marqueeStyle} className=" inset-x-0 top-0 py-2">
        <h5>WELCOME TO ALFATEKSTRADE.COM PAYMENTS WE ACCEPT:  BTC ETH LITECOIN USDT STELLAR USD-COIN BNB  CONTACT SUPPORT FOR ENQUIRIES.</h5>
      </div>
    </div>
  );
};

export default ScrollingHeader;
