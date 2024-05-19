import { useRef } from 'react';
import { createPortal } from 'react-dom';
import NavLink from './NavLink';
export default function Modal({ children, links }) {
  const dialog = useRef();
  return createPortal(
    <dialog
      className=' w-full  h-1/4 flex flex-col justify-evenly items-center bg-main-color list-none animate-fade-down animate-duration-[400ms] animate-once'
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
