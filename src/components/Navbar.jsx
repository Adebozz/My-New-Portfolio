import React from 'react';
import {FaBars, FaTimes} from 'react-icons/fa'

const Navbar = () => {

    const links= [
        {
            id: 1,
            link: 'home'
        },
        {
            id: 2,
            link: 'about'
        },
        {
            id: 3,
            link: 'portfolio'
        },
        {
            id: 4,
            link: 'experience'
        },
        {
            id: 5,
            link: 'contact'
        },
    ]
  return (
    <div className='flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed'>
      <div>
      <h1 className='font-signature text-5xl ml-2'>Adeboss</h1>
      </div>

      <ul className='flex'>


        {links.map[link =>(
                <li className='px-4 cursor-pointer capitalize font-medium text-grey-500 hover:scale-105 duration-200'>Home</li>

        )
        ]}
      </ul>
    </div>

  )
}

export default Navbar
