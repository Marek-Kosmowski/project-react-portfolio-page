import avatarImage from '../assets/avatar-new-new.png';

export default function HeroSection() {
  return (
    <section>
      <div className='grid grid-cols-1 sm:grid-cols-12 md:gap-12 mt-20'>
        <div className='col-span-7 place-self-center text-center sm:text-left'>
          <h1 className=' text-main-text mb-4 text-4xl sm:text-5xl lg:text-6xl'>
            Hello, I&apos;m Marek
          </h1>
          <p className='text-para-text text-lg mb-6 lg:text-xl'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
            autem porro accusantium suscipit enim sequi id maxime maiores
            temporibus aperiam dolor vitae, perferendis illo. Quibusdam odit
            magni nisi animi ullam?
          </p>
          <div>
            <button className='px-6 py-3 mr-6 w-full sm:w-fit rounded-full bg-gradient-to-r from-cyan-500 via-sky-600 to-blue-500 '>
              About me
            </button>
            <button className='px-1 py-1 w-full sm:w-fit mt-4 rounded-full text-white bg-gradient-to-r from-cyan-500 via-sky-600 to-blue-500'>
              <span className='block px-5 py-2 bg-main-color rounded-full hover:bg-[#1b263b] duration-200'>
                Download CV
              </span>
            </button>
          </div>
        </div>
        <div className='  col-span-5 place-self-center mt-8 lg:mt-0'>
          <div className='rounded-full bg-[#1b263b] lg:w-[450px] lg:h-[450px] relative w-[350px] h-[350px]'>
            <img
              className='lg:w-[400px] lg:h-[400px] rounded-full absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 w-[300px] h-[300px]'
              src={avatarImage}
              alt='image of a cartoon avatar'
            />
          </div>
        </div>
      </div>
    </section>
  );
}
