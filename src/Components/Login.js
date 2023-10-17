// import React, { useState } from 'react';
// import { Logo } from '../asset/icons/Icons';

// const LoginForm = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [emailError, setEmailError] = useState('');
//   const [passwordError, setPasswordError] = useState('');

//   const handleEmailChange = (e) => {
//     const value = e.target.value;
//     setEmail(value);

//     // Validate email format
//     const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
//     if (!emailPattern.test(value)) {
//       setEmailError('Enter a valid email');
//     } else {
//       setEmailError('');
//     }
//   };

//   const handlePasswordChange = (e) => {
//     const value = e.target.value;
//     setPassword(value);

//     // Validate password length
//     if (value.length < 6) {
//       setPasswordError('At least 6 characters required.');
//     } else {
//       setPasswordError('');
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Perform login or submit action if validations pass
//     if (emailError || passwordError) {
//       // Validation failed, do not submit the form
//       return;
//     }

//     // Your login or submission logic here
//   };

//   return (
//     <div className='bg-[#02281F] pt-4 md:pt-11'>
//       <div className="w-full max-w-md mx-auto flex flex-col items-center">
//         <img src={Logo} alt="logo" className="h-12" />
//         <form
//           className="bg-white shadow-md rounded px-4 md:px-8 pt-6 pb-8 mb-4 mt-6"
//           onSubmit={handleSubmit}
//         >
//           <h3 className='text-[#364A63] font-bold text-2xl text-center md:text-left'>Login into Account</h3>
//           <p className='text-[#536483] pt-3 text-sm text-center md:text-left'>
//             Sign in into your account using your email and passcode.
//           </p>
//           <div className="mb-4 pt-3">
//             <label className="block text-[#344456] text-sm font-bold mb-2" htmlFor="email">
//               Email Address<span className="text-[#E85347]">*</span>
//             </label>
//             <input
//               className={`shadow appearance-none border rounded w-full py-2 px-3 text-[#3B4E62] leading-tight focus:outline-none focus:shadow-outline ${
//                 emailError ? 'border-red-500' : ''
//               }`}
//               id="email"
//               type="email"
//               placeholder="Enter your email Address"
//               value={email}
//               onChange={handleEmailChange}
//             />
//             {emailError && (
//               <p className="bg-[#ED756B] text-white text-xs italic">{emailError}</p>
//             )}
//           </div>
//           <div className="mb-4">
//             <label className="block text-[#344456]  text-sm font-bold mb-2" htmlFor="password">
//               Password<span className="text-[#E85347]">*</span>
//             </label>
//             <input
//               className={`shadow appearance-none border rounded w-full py-2 px-3 text-[#3B4E62] leading-tight focus:outline-none focus:shadow-outline ${
//                 passwordError ? 'border-red-500' : ''
//               }`}
//               id="password"
//               type="password"
//               placeholder="Enter your passcode"
//               value={password}
//               onChange={handlePasswordChange}
//             />
//             {passwordError && (
//               <p className="bg-[#ED756B] text-white text-xs italic">{passwordError}</p>
//             )}
//           </div>
//           <div className="mb-4 flex justify-between">
//             <label className="block text-[#8698B1] text-sm mb-2" htmlFor="rememberMe">
//               <input
//                 className="mr-2 leading-tight"
//                 id="rememberMe"
//                 type="checkbox"
//               />
//               Remember Me
//             </label>
//             <a className="text-[#10AC81] text-sm font-semibold" href="/forgot-password">
//               Forgot Code?
//             </a>
//           </div>
//           <div className="mb-6">
//             <button
//               className="bg-[#10AC81] hover:bg-[#0d9973] text-white font-bold py-2 px-4 md:px-[46%] rounded focus:outline-none focus:shadow-outline"
//               type="submit"
//             >
//               Login
//             </button>
//           </div>
//           <p className="text-center text-[#536483] text-sm">
//             New on our platform? <span className="text-[#10AC81] text-sm font-semibold">Create an account</span>
//           </p>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default LoginForm;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Logo } from '../asset/icons/Icons';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);

    // Validate email format
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(value)) {
      setEmailError('Enter a valid email');
    } else {
      setEmailError('');
    }
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);

    // Validate password length
    if (value.length < 6) {
      setPasswordError('At least 6 characters required.');
    } else {
      setPasswordError('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform login or submit action if validations pass
    if (emailError || passwordError) {
      // Validation failed, do not submit the form
      return;
    }

    // Your login or submission logic here
  };

  const footLinks = [
    {
      title: "Fees",
      links: './'
    },
    {
      title: "FAQs",
      links: [
        { name: "Why choose us", link: "/" },
        { name: "Contact us", link: "/" },
        { name: "Careers", link: "/" },
        { name: "DEVELOPER API", link: "/" },
      ],
    },
    {
      title: "Terms and Condition",
      links: [
        { name: "Why choose us", link: "/" },
        { name: "Contact us", link: "/" },
        { name: "Careers", link: "/" },
        { name: "DEVELOPER API", link: "/" },
      ],
    },
    {
      title: "Privacy Policy",
      links: [
        { name: "Why choose us", link: "/" },
        { name: "Contact us", link: "/" },
        { name: "Careers", link: "/" },
        { name: "DEVELOPER API", link: "/" },
      ],
    },
  ]

  return (
    <div className='bg-[#02281F] pt-4 md:pt-11'>
      <div className="w-full max-w-md mx-auto flex flex-col items-center">
        <img src={Logo} alt="logo" className="h-12" />
        <form
          className="bg-white shadow-md rounded px-4 md:px-8 pt-6 pb-9 mb-11 mt-6"
          onSubmit={handleSubmit}
        >
          <h3 className='text-[#364A63] font-bold text-2xl text-center md:text-left md:text-center lg:text-left'>Login into Account</h3>
          <p className='text-[#536483] pt-3 text-sm text-center md:text-left lg:text-left'>
            Sign in into your account using your email and passcode.
          </p>
          <div className="mb-4 pt-3">
            <label className="block text-[#344456] text-sm font-bold mb-2" htmlFor="email">
              Email Address<span className="text-[#E85347]">*</span>
            </label>
            <input
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-[#3B4E62] leading-tight focus:outline-none focus:shadow-outline ${
                emailError ? 'border-red-500' : ''
              }`}
              id="email"
              type="email"
              placeholder="Enter your email Address"
              value={email}
              onChange={handleEmailChange}
            />
            {emailError && (
              <p className="bg-[#ED756B] text-white text-xs italic">{emailError}</p>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-[#344456]  text-sm font-bold mb-2" htmlFor="password">
              Password<span className="text-[#E85347]">*</span>
            </label>
            <input
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-[#3B4E62] leading-tight focus:outline-none focus:shadow-outline ${
                passwordError ? 'border-red-500' : ''
              }`}
              id="password"
              type="password"
              placeholder="Enter your passcode"
              value={password}
              onChange={handlePasswordChange}
            />
            {passwordError && (
              <p className="bg-[#ED756B] text-white text-xs italic">{passwordError}</p>
            )}
          </div>
          <div className="mb-4 flex justify-between">
            <label className="block text-[#8698B1] text-sm mb-2" htmlFor="rememberMe">
              <input
                className="mr-2 leading-tight"
                id="rememberMe"
                type="checkbox"
              />
              Remember Me
            </label>
            <a className="text-[#10AC81] text-sm font-semibold" href="/forgot-password">
              Forgot Code?
            </a>
          </div>
          <div className="mb-6">
            <button
              className="bg-[#10AC81] hover:bg-[#0d9973] text-white font-bold py-2 px-4 md:px-[46%] rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Login
            </button>
          </div>
          <p className="text-center text-[#536483] text-sm">
            New on our platform? <span className="text-[#10AC81] text-sm font-semibold">Create an account</span>
          </p>
        </form>
      </div>

      <hr className='border-[#08523C]'/>
      <footer className='bg-[#02231A] p-5 flex justify-around'>
      <p className='text-white'>Alfateks Trade © 2023. All Rights Reserved.</p>
      <div className='text-[#10AC81]'>
        <ul className='flex space-x-7 text-sm'>
        <Link to="/">Fees</Link>
        <Link to="/">FAQs</Link>
        <Link to="/index.html">Terms and Condition</Link>
        <Link to="/">Privacy Policy</Link>
        </ul>
      </div>
      </footer>

      
    </div>
  );
};

export default LoginForm;
