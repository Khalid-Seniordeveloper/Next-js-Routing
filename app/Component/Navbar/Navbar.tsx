import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (



    
<div className='flex justify-center gap-80' style={{
  background  : '#1f2937',
  height : "70px",
  alignItems : 'center'
}}>

  <div>
    <h1 className='text-2xl text-white'>Khalid</h1>
  </div>

<div>

<ul className='flex gap-10 text-xl text-white'>
  <Link href={'/'}><li>Home</li></Link>
  <Link href={'/about'}><li>About</li></Link>

  <Link href={'/contact'}><li>Contact</li></Link>

  <Link href={'/portfolio'}><li>Portfolio</li></Link>


</ul>

</div>

<div>
  
  </div>



</div>


  )
}

export default Navbar