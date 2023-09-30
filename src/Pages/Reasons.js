import React from 'react';
import { Person1, Person2, Person3, Person4, Person5, Person6 } from '../asset/images/Images';

const Reasons = () => {
  return (
    <div className="pt-11">
      <div>
        <div className="items-center justify-center text-center">
          <h3 className="text-[#B6F848] font-semibold">
            WHY YOU NEED ALFATEKSTRADE
          </h3>
          <h3 className="text-white pt-11 text-4xl">
            Latest AlfateksTrade Statistics
          </h3>
          <p className="text-[#959595] pt-9">
            Our Investors profit up to $2.9 million Every week we disburse loans
            of up to $1.5 million
          </p>
        </div>

        {/* testimonial */}
        <div className="mt-[9%]">
          <div className="relative right-[20px]">
            <h3 className="text-[#B6F848] font-semibold pt-[30px] pl-2">
              TESTIMONIALS
            </h3>
            <h3 className="text-white text-4xl pt-9">
              Our Satified Clients Review
            </h3>
          </div>
          <div className="flex text-white relative left-7">
            <div>
              <h3>1.2M+</h3>
              <p>Total Investors</p>
            </div>
            <div>
              <h3>4.8</h3>
              <p>Our Rating</p>
            </div>
          </div>

          {/* people testimony */}
          <div className="container mx-auto text-white">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Column 1 */}
              <div className="p-4 flex justify-center h-98">
                <div className="text-center">
                  <div className="flex items-center justify-center">
                    <img
                      src={Person1}
                      alt="person1"
                      className="w-20 h-auto rounded-full"
                    />
                  </div>
                  <p className='w-[250px] pt-5 text-2xl'>
                    “Great Service and Site. Easy sign up. Easy deposit and placement
                    in interest accounts. Easy Instant Loan. Easy withdrawals. Quick
                    Customer Service Replies.”
                  </p>
                  <h5 className="font-bold pt-10">Abdul Yussuf</h5>
                  <p className="text-[#959595]">CRYPTO INVESTOR</p>
                </div>
              </div>

              {/* Column 2 */}
              <div className="bg-[#B6F848] rounded-lg p-4 flex justify-center h-98">
                <div className="text-center">
                  <div className="flex items-center justify-center">
                    <img
                      src={Person2}
                      alt="person2"
                      className="w-20 h-auto rounded-full"
                    />
                  </div>
                  <p className='text-black w-[250px] pt-5 text-2xl'>
                    AlfateksTrade is great! Its user-friendly website allows maximum
                    benefits to crypto enthusiasts compared to all competitors. The
                    customer service is also very helpful.”
                  </p>
                  <h5 className="text-black font-bold pt-10">Amanda Peterson</h5>
                  <p className="text-[#959595]">COPY TRADER</p>
                </div>
              </div>

              {/* Column 3 */}
              <div className="p-4 flex justify-center h-98">
                <div className="text-center">
                  <div className="flex items-center justify-center">
                    <img
                      src={Person3}
                      alt="person3"
                      className="w-20 h-auto rounded-full"
                    />
                  </div>
                  <p className='w-[250px] pt-5 text-2xl'>
                    “I used this service as a lender twice and I really like it!! My
                    personal thanks to the support team, I had some questions when I
                    was trying to verify my account for the first time and they helped
                    me very fast!”
                  </p>
                  <h5 className="font-bold pt-10">Daniel Stone</h5>
                  <p className="text-[#959595]">CRYPTO INVESTOR</p>
                </div>
              </div>
            </div>
          </div>

          {/* second testimonial */}
          <div className='mt-[14%]'>
            <div className="items-center justify-center text-center">
              <h3 className="text-[#B6F848]">WHY YOU NEED ALFATEKSTRADE</h3>
              <h3 className="text-white text-4xl pt-9">Investor Friendly platform</h3>
              <p className="text-[#959595] pt-10">
                Our Investors profit up to $2.9 million
              </p>
              <p className="text-[#959595] pt-3">
                Every penny deposited by a client is held in a separate, segregated account.
              </p>
              <p className="text-[#959595] pt-6">This means that even in the highly unlikely event of AlfateksTrade’s bankruptcy, your funds will be safe.</p>
            </div>
            <div>
              <h3>TESTIMONIALS</h3>
              <h3 className="text-white text-4xl pt-9">More Clients Review</h3>
            </div>
            <div className="flex gap-4 text-white">
              <div>
                <h3>10.8M+</h3>
                <p className="text-[#959595]">Total Investors</p>
              </div>
              <div>
                <h3>4.9</h3>
                <p className="text-[#959595]">Our Rating</p>
              </div>
            </div>

            <div className="container mx-auto text-white">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Column 1 */}
                <div className="p-4 flex justify-center h-98">
                  <div className="text-center flex flex-col items-center">
                    <div className="flex items-center justify-center">
                      <img
                        src={Person4}
                        alt="person4"
                        className="w-20 h-auto rounded-full"
                      />
                    </div>
                    <p className='w-[250px] pt-5 text-2xl'>
                      “Great concept of savings from crypto, reasonable profit rates, quick buy from debit/credit cards, easy crypto exchange, can withdraw anytime at no fees.”
                    </p>
                    <video width="320" height="240" controls className='pt-[20%]'>
                      <source src="your-video-url.mp4" type="video/mp4" />
                      <source src="your-video-url.ogg" type="video/ogg" />
                      Your browser does not support the video tag.
                    </video>
                    <h5 className='font-bold pt-10'>Nasir Salman</h5>
                    <p className="text-[#959595]">INVESTOR</p>
                  </div>
                </div>

                {/* Column 2 */}
                <div className="bg-[#B6F848] rounded-lg p-4 flex justify-center h-98">
                  <div className="text-center flex flex-col items-center">
                    <div className="flex items-center justify-center">
                      <img
                        src={Person5}
                        alt="person5"
                        className="w-20 h-auto rounded-full"
                      />
                    </div>
                    <p className='text-black w-[250px] pt-5 text-2xl'>
                      “A forward-thinking company ahead of its game hence a game changer..I will continue to use AlfateksTrade”
                    </p>
                    <video width="320" height="240" controls className='pt-[20%]'>
                      <source src="your-video-url.mp4" type="video/mp4" />
                      <source src="your-video-url.ogg" type="video/ogg" />
                      Your browser does not support the video tag.
                    </video>
                    <h5 className="text-black font-bold pt-10">Alexander Gray</h5>
                    <p className="text-[#959595]">INVESTOR</p>
                  </div>
                </div>

                {/* Column 3 */}
                <div className="p-4 flex justify-center h-98">
                  <div className="text-center flex flex-col items-center">
                    <div className="flex items-center justify-center">
                      <img
                        src={Person6}
                        alt="person6"
                        className="w-20 h-auto rounded-full"
                      />
                    </div>
                    <p className='w-[250px] pt-5 text-2xl'>
                      “AlfateksTrade support is so great. They have friendly account managers. I recommend this company”
                    </p>
                    <video width="320" height="240" controls className='pt-[20%]'>
                      <source src="your-video-url.mp4" type="video/mp4" />
                      <source src="your-video-url.ogg" type="video/ogg" />
                      Your browser does not support the video tag.
                    </video>
                    <h5 className='font-bold pt-10'>Daniel Stone</h5>
                    <p className="text-[#959595]">INVESTOR</p>
                  </div>
                </div>
              </div>

              {/* subscribe */}
              <div className='bg-[#191919] mt-[16%] pb-[3%]'>
                <div className="items-center justify-center text-center pt-8">
                  <h3 className='text-[#B6F848]'>WHY US</h3>
                  <h3 className='mt-8 text-4xl pt-9"'>Be part of the ecosystem of the future!</h3>
                  <p className="text-[#959595] pt-6">Subscribe to be the first to hear about all the features</p>
                  <div className="container mx-auto mt-8">
                    <div className="relative w-64 mx-auto">
                      <input
                        type="text"
                        placeholder="Email*"
                        className="block w-full px-4 py-2 text-white bg-[#292929] rounded-md focus:outline-none"
                      />
                      <button className="absolute right-0 h-full px-4 bg-[#B6F848] text-black rounded-md">
                        SIGNUP
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reasons;
