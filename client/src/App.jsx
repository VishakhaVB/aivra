import { Hero } from './components/sections/Hero';
import { Features } from './components/sections/Features';
import { WhyDifferent } from './components/sections/WhyDifferent';
import { Preview } from './components/sections/Preview';
import { WhoFor } from './components/sections/WhoFor';
import { FinalCta } from './components/sections/FinalCta';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';

function App() {
  return (
    <>
      <Navbar />
      <main className="bg-aivra-dark overflow-hidden flex flex-col">
        <Hero />
        <Features />
        <WhyDifferent />
        <Preview />
        <WhoFor />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}

export default App;
