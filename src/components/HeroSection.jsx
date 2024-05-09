import avatarImage from '../assets/avatar-new-new.png';

export default function HeroSection() {
  return (
    <section>
      <div className='grid grid-cols-1 lg:grid-cols-12'>
        <div className='col-span-7 place-self-center'>
          <h1 className=' text-main-text mb-4 text-4xl lg:text-6xl'>
            Hello, I'm Marek
          </h1>
          <p className='text-para-text text-lg mb-6 lg:text-xl'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
            autem porro accusantium suscipit enim sequi id maxime maiores
            temporibus aperiam dolor vitae, perferendis illo. Quibusdam odit
            magni nisi animi ullam?
          </p>
          <div>
            <button className='px-6 py-3 mr-6 rounded-full bg-white hover:bg-slate-200 duration-200'>About me</button>
            <button className='px-6 py-3 rounded-full border border-white text-white bg-transparent hover:bg-[#1b263b] duration-200'>Download CV</button>
          </div>
        </div>
        <div className='  col-span-5 place-self-center mt-8 lg:mt-0'>
          <div className='rounded-full bg-[#1b263b] w-[450px] h-[450px] relative '>
            <img
              className='w-[400px] h-[400px] rounded-full absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
              src={avatarImage}
              alt='image of a cartoon avatar'
            />
          </div>
        </div>
      </div>
    </section>
  );
}
