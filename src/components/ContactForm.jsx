import { useForm } from 'react-hook-form';

export default function ContactForm() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='grid grid-cols-2 grid-rows-7 justify-items-center w-1/2 self-center items-center justify-center'
    >
      <label htmlFor='subject' className=' justify-self-start text-main-text'>
        Subject
      </label>
      <input
        {...register('subject', { required: true })}
        className='col-span-2 w-full py-2 rounded bg-input-bg border-2 border-gray-600'
      />
      <label htmlFor='email' className='justify-self-start text-main-text'>
        Your Email
      </label>
      <input
        type='text'
        placeholder='email@address.com'
        {...register('Email', { required: true, pattern: /^\S+@\S+$/i })}
        className='col-span-2 w-full py-2 rounded bg-input-bg border-2 border-gray-600'
      />
      <label htmlFor='message' className='justify-self-start text-main-text'>
        Message
      </label>
      <textarea
        {...register('Message', { required: true, min: 10 })}
        className='col-span-2 w-full rounded bg-input-bg border-2 border-gray-600'
      />
      <input type='submit' className='col-span-2 w-full text-main-text' />
    </form>
  );
}
