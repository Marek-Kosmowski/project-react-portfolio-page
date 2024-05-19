import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import portfolioLogo from '../assets/logo-no-background.svg';
import NavLink from './NavLink';
import Modal from './Modal';

const navLinks = [
  { path: '#home', title: 'Home' },
  { path: '#about', title: 'About' },
  { path: '#portfolio', title: 'Portfolio' },
];

export default function Header() {
  const [menuNavbarOpen, setMenuNavbarOpen] = useState(false);

  const handleOpenMenuButton = () => {
    setMenuNavbarOpen(true);
  };
  const handleCloseMenuButton = () => {
    setMenuNavbarOpen(false);
  };

  return (
    <>
      <header className='md:fixed md:mx-auto md:top-0 md:left-0 md:right-0 md:z-20 bg-main-color text-white border-b border-gray-600 shadow-md shadow-gray-600'>
        <nav className=' flex justify-between p-4 items-center '>
          <div className='w-20 h-20'>
            <img src={portfolioLogo} alt='logo image' />
          </div>
          <div className='md:block hidden w-3/4'>
            <div className='flex justify-end items-center gap-24'>
              <ul className='flex justify-self-center gap-12 '>
                {navLinks.map((link, index) => {
                  const { title, path } = link;
                  return <NavLink key={index} title={title} path={path} />;
                })}
              </ul>
              <button className='mr-4 px-1 py-1 bg-gradient-to-r from-cyan-500 via-sky-600 to-blue-500 rounded-full'>
                <span className='block px-6 py-2 bg-main-color rounded-full hover:bg-[#1b263b] duration-200 '>
                  Contact Me
                </span>
              </button>
            </div>
          </div>
          <div className='md:hidden z-40 '>
            {!menuNavbarOpen ? (
              <button
                className='flex items-center px-3 py-2 border rounded-md border-neutral-500 '
                onClick={handleOpenMenuButton}
              >
                <Bars3Icon className='h-5 w-5' />
              </button>
            ) : (
              <button
                className='flex items-center px-3 py-2 border rounded-md border-neutral-500 '
                onClick={handleCloseMenuButton}
              >
                <XMarkIcon className='h-5 w-5' />
              </button>
            )}
          </div>
        </nav>
      </header>
      {menuNavbarOpen && (
        <Modal links={navLinks}>
          <button className=' px-1 py-1 w-1/2 h-10 bg-gradient-to-r from-cyan-500 via-sky-600 to-blue-500 rounded-full'>
            Contact Me
          </button>
        </Modal>
      )}
    </>
  );
}
