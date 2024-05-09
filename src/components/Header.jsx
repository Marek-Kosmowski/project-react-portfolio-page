import portfolioLogo from '../assets/logo-no-background.svg';
import NavLink from './NavLink';

const navLinks = [
  { path: '#home', title: 'Home' },
  { path: '#about', title: 'About' },
  { path: '#portfolio', title: 'Portfolio' },
];

export default function Header() {
  return (
    <>
      <header className=' bg-main-color text-white'>
        <nav className='flex justify-between p-4 items-center'>
          <div className='w-20 h-20'>
            <img src={portfolioLogo} alt='logo image' />
          </div>
          <ul className='flex gap-12'>
            {navLinks.map((link, index) => {
              const { title, path } = link;
              return <NavLink key={index} title={title} path={path} />;
            })}
          </ul>
          <button className='mr-4 px-1 py-1 bg-gradient-to-r from-cyan-500 via-sky-600 to-blue-500 rounded-full'>
            <span className='block px-6 py-2 bg-main-color rounded-full hover:bg-[#1b263b] duration-200'>
              Contact Me
            </span>
          </button>
        </nav>
      </header>
    </>
  );
}
