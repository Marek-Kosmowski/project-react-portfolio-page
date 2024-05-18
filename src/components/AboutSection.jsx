import aboutImg from '../assets/aboutMe-img.png';

export default function AboutSection() {
  return (
    <section>
      <div className='flex gap-10 text-white'>
        <img
          className='w-[400px] h-[400px]'
          src={aboutImg}
          alt='about me image'
        />
        <div className='text-center'>
          <h2 className='text-2xl my-8'>About Me</h2>
          <p className=' text-para-text text-lg'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            dolor doloribus eius numquam aut similique, autem accusantium hic
            consectetur reprehenderit molestiae blanditiis ut sequi inventore
            suscipit id sit ex harum. Vitae adipisci, voluptatibus odit itaque
            tempore vero? Eum sunt repudiandae ex ipsa magni ratione, quae
            culpa! Incidunt dolore non corporis eos, velit animi, labore est
            error dolor esse, aperiam ea? Facere iure distinctio quidem commodi
            sed labore quos sint odio necessitatibus nesciunt, pariatur esse
            accusamus! Reiciendis ipsam dolor doloribus. Quasi repellendus ut
            nihil ducimus saepe illo.
          </p>
        </div>
      </div>
    </section>
  );
}
