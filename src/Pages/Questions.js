import React, { useState } from 'react';

const Questions = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  const faqData = [
    {
      question: 'Which cryptocurrencies are offered by AlfateksTrade Trade?',
      answer:  ` <p>Bitcoin (BTC): The largest cryptocurrency by market cap, considered to be the first wide-scale implementation of blockchain technology.</p>
      <p>Ethereum (ETHEREUM): This leading cryptocurrency has received international recognition from technology giants such as Microsoft and Intel. In addition to payments, Ethereum also supports “smart contracts”.</p>
      <p>Bitcoin Cash (BCH): A ‘hard fork’ designed to be a solution to the transaction backlog Bitcoin was experiencing, Bitcoin Cash’s block size is eight times that of Bitcoin.</p>
      <p>Litecoin (LTC): The first cryptocurrency to implement SegWit, a method of speeding up transaction times without compromising the underlying blockchain technology</p>
      <p>Dash (DASH): Based on Bitcoin’s technology, Dash’s additional infrastructure enables faster transactions and higher liquidity, though unlike other cryptocurrencies, Dash is a decentralized autonomous organization (DAO).</p>
      <p>Stellar Lumens (XLM): Operating on a unique consensus algorithm rather than mining, Stellar can facilitate transactions between multiple currencies, whether fiat or digital.</p>
      <p>NEO (NEO): Also known as the ‘Chinese Ethereum,’ NEO was designed to be easily modified and to have no forking ability..</p>
      `
    },
    {
      question: 'What is the minimum amount needed to trade on AlfateksTrade Trade?',
      answer: 'We offer 50 usd minimum deposit. On the AlfateksTrade Trade trading platform, trades are made by dollar amount, rather than by unit of an asset. That means that you don’t need to buy whole units of an asset; you can buy just a fraction of a cryptocurrency, starting from a minimum of $50 per trade.',
    },
    {
      question: 'Which payment methods are accepted for deposits?',
      answer: 'We currently accept deposits through Crypto Deposits, PayPal, or wire transfer only. These payment methods are the best options for secure deposits and withdrawals, protecting our clients and ensuring that all funds are properly accounted for',
    },
    {
      question: 'Is the cryptocurrency in my AlfateksTrade Trade portfolio the actual asset?',
      answer: 'Yes. When you deposit cryptocurrency on the AlfateksTrade Trade trading platform, we use an automated system based on consolidated cryptocurrency accounts to purchase the actual asset. This automated method simply helps us provide lightning-fast transaction times, increased security, and a very straightforward user experience.',
    },
    {
      question: 'Can I use the cryptocurrency in my AlfateksTrade Trade portfolio for external payments?',
      answer: 'No. However, AlfateksTrade Trade offers an integrated multisig wallet as an easy and convenient way to use your crypto externally. Once a cryptocurrency has been transferred to the AlfateksTrade Trade Wallet, it may be used to send external payments. For more information about the AlfateksTrade Trade Wallet, click here.',
    },
  ];
  return (
    <div className='mt-[16%]'>
      <div className="items-center justify-center text-center pt-8">
        <h3 className='text-[#B6F848]'>QUESTION</h3>
        <p className='text-white text-4xl pt-9'>The most frequently asked questions</p>
      </div>
      <div className="bg-[#191919] text-white mt-10 py-8">
      <div className="container mx-auto rounded-lg">
        {faqData.map((faq, index) => (
          <div key={index} className="mb-4">
            <div
              className={`flex justify-between items-center cursor-pointer p-4 ${
                openIndex === index ? 'bg-[#B6F848] text-black' : ''
              }`}
              onClick={() => toggleFaq(index)}
            >
              <h5 className="text-lg">{faq.question}</h5>
              <span className="text-lg">{'+'}</span>
            </div>
            {openIndex === index && (
              <div className="p-4 bg-[#B6F848] text-black">
                <div dangerouslySetInnerHTML={{ __html: faq.answer }} />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
    </div>
  )

}

export default Questions