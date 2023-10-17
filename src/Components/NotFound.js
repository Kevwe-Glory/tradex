import React from 'react'

const NotFound = () => {
  return (
    <div className='bg-white'>
      <div className='text-center text-[#444444]'>
        <h1 className='text-8xl font-bold'>404</h1>
        <h2 className='text-2xl font-semibold'>Not Found</h2>
        <p>The resource requested could not be found on this server!</p>
      </div>
      <footer className='bg-[#474747] text-white mt-[30%] pl-5 p-4'>
        <p>Proudly powered by
          <a href="http://www.litespeedtech.com/error-page"> LiteSpeed Web Server</a></p>
        <p>Please be advised that LiteSpeed Technologies Inc. is not a web hosting company and, as such, has no control over content found on this site.</p>
      </footer>
    </div>
  )
}

export default NotFound