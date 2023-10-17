import React from 'react';

const ScrollingHeader = () => {
  const containerStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    fontFamily: 'Roboto, sans-serif',
    boxShadow: '0 4px 8px -4px rgba(0, 0, 0, 0.3)',
  };

  const titleStyle = {
    position: 'absolute',
    background: '#df2020',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    padding: '0 24px',
    color: 'white',
    fontWeight: 'bold',
    zIndex: 200,
  };

  const ulStyle = {
    display: 'flex',
    listStyle: 'none',
    margin: 0,
    animation: 'scroll 25s infinite linear',
  };

  const liStyle = {
    whiteSpace: 'nowrap',
    padding: '10px 24px',
    color: '#494949',
    position: 'relative',
  };

  const liAfterStyle = {
    content: '""',
    width: '1px',
    height: '100%',
    background: '#b8b8b8',
    position: 'absolute',
    top: 0,
    right: 0,
  };

  return (
    <div className="text-[#B6F848] py-2" style={containerStyle}>
      <div className="inset-x-0 top-0 py-2">
        <h5 style={titleStyle}>
          WELCOME TO ALFATEKSTRADE.COM PAYMENTS WE ACCEPT: BTC ETH LITECOIN USDT STELLAR USD-COIN BNB CONTACT SUPPORT FOR ENQUIRIES.
        </h5>
      </div>
    </div>
  );
};

export default ScrollingHeader;
