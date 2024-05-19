import { useRef } from 'react';
import { createPortal } from 'react-dom';
import NavLink from './NavLink';
export default function Modal({ children, links }) {
  const dialog = useRef();
  return createPortal(
    <dialog
      className=' w-full  h-1/4 flex flex-col justify-evenly items-center bg-gray-800 list-none opacity-90'
      ref={dialog}
    >
      {links.map((link, index) => (
        <NavLink key={index} title={link.title} path={link.path} />
      ))}
      {children}
    </dialog>,
    document.getElementById('modal')
  );
}
