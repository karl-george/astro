import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';
import { Link as LinkScroll } from 'react-scroll';
import Button from './Button';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const NavLink = ({ title }) => (
    <LinkScroll
      to={title}
      spy={true}
      smooth={true}
      offset={-100}
      onClick={() => setIsOpen(false)}
    >
      {title}
    </LinkScroll>
  );

  return (
    <header>
      <div className='py-8'>
        <div className='container flex items-center justify-between'>
          {/* Mobile Logo */}
          <div className='cursor-pointer flex items-center max-lg:flex-1 '>
            <a href='/'>
              <img src='./images/logo.png' alt='logo' width={34} height={34} />
            </a>
            <p className='text-t1 text-3xl ml-2'>Astro</p>
          </div>

          {/* Nav Menu */}
          <nav className='flex'>
            <ul className='flex'>
              <li className='space-x-8 text-t3 text-lg'>
                <NavLink title={'Product'} />
                <NavLink title={'Why Us'} />
                <NavLink title={'Pricing'} />
              </li>
            </ul>
          </nav>

          {/* Buttons */}
          <div className='flex gap-3'>
            <Button doesGlow={true} containerClasName={'bg-buttonGreen'}>
              Get Started
            </Button>
            <Button>Contact Sales</Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className='lg:hidden'
            onClick={() => setIsOpen((prevState) => !prevState)}
          >
            {isOpen ? (
              <XMarkIcon className='text-white w-8 h-8' />
            ) : (
              <Bars3Icon className='text-white w-8 h-8' />
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
