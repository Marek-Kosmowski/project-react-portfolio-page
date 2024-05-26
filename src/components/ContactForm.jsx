import { useForm } from 'react-hook-form';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactForm() {
  const { register, handleSubmit, reset } = useForm();
  const form = useRef();

  const sendEmail = () => {
    emailjs
      .sendForm('contact_service', 'contact_form', form.current, {
        publicKey: '_YlVkgqlZ6o0APVfe',
      })

      .then(
        () => {
          console.log('SUCCESSS!');
        },
        reset(),
        (error) => {
          console.log('FAILED...', error);
        }
      );
  };

  return (
    <form
      onSubmit={handleSubmit(sendEmail)}
      ref={form}
      className='grid grid-cols-2 grid-rows-7 justify-items-center w-full sm:w-1/2 self-center items-center justify-center'
    >
      <label
        htmlFor='subject'
        className=' justify-self-start self-end text-main-text'
      >
        Subject
      </label>
      <input
        {...register('subject', { required: true })}
        className='col-span-2 w-full py-2 rounded bg-input-bg border-2 border-gray-600'
      />
      <label
        htmlFor='email'
        className='justify-self-start text-main-text self-end'
      >
        Your Email
      </label>
      <input
        type='text'
        placeholder='email@address.com'
        {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
        className='col-span-2 w-full py-2 rounded bg-input-bg border-2 border-gray-600'
      />
      <label
        htmlFor='message'
        className='justify-self-start text-main-text self-end'
      >
        Message
      </label>
      <textarea
        {...register('message', { required: true, min: 10 })}
        className='col-span-2 w-full rounded bg-input-bg border-2 border-gray-600'
      />
      <input
        type='submit'
        className='col-span-2 w-full text-main-text rounded-full bg-gradient-to-r from-cyan-500 via-sky-600 to-blue-500 py-2 mt-4 text-base sm:text-lg '
      />
    </form>
  );
}
