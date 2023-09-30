import React from 'react';
import { ErrorImage } from '../asset/icons/Icons';

const ErrorPage = () => {
  return (
    <div className='bg-[#F5F6FA] p-[10%]'>
      <div className='mx-auto w-[450px]'>
        <img src={ErrorImage} alt="error page" className='w-full' />
      </div>
    <div className='text-center pt-11'>
      <h4 className='text-2xl font-semibold text-[#364A63]'>Oops! Why are you here?</h4>
      <p className='text-[#536483] pt-6'>We're sorry for the inconvenience. It looks like you're trying to access a page that either has been deleted or never existed.</p>
      <button className='bg-[#037CFE] mt-9 p-2 rounded-md text-white'>Back To Home</button>
    </div>
  </div>
  
  );
};

export default ErrorPage;
