import { useForm } from 'react-hook-form';

export default function ContactForm() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('firstname', { required: true })} />
      <input
        type='text'
        placeholder='email'
        {...register('Email', { required: true, pattern: /^\S+@\S+$/i })}
      />

      <textarea {...register('Message', { required: true, min: 10 })} />
      <input type='submit' />
    </form>
  );
}
