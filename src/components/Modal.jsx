export default function Modal({ children }) {
  return (
    <>
      <div className='flex flex-col justify-center items-center bg-neutral-700 rounded-lg shadow-xl shadow-neutral-600 animate-fade-up animate-duration-300 animate-ease-in list-none h-full '>{children}</div>
    </>
  );
}

