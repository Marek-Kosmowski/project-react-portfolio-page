import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ContactForm from './components/ContactForm';
function App() {
  return (
    <main className=' flex flex-col min-h-screen  bg-main-color'>
      <Header />
      <div className='container mx-auto my-10 px-12 py-4 flex flex-col gap-20'>
        <HeroSection />
        <AboutSection />
        <ContactForm />
      </div>
    </main>
  );
}

export default App;
