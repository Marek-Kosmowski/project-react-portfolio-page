import { useRef } from 'react';
import { createPortal } from 'react-dom';

export default function Modal({ children }) {
  const dialog = useRef();
  return createPortal(
    <dialog
      className=' h-1/3 w-full  flex flex-col justify-evenly items-center bg-gray-800 list-none opacity-90'
      ref={dialog}
    >
      {children}
    </dialog>,
    document.getElementById('modal')
  );
}
