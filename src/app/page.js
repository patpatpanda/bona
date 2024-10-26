import './globals.css';
import CallToAction from '@/components/CallToAction';
import Hero from '@/components/Hero';
import About from '@/components/About'; // Importera About-komponenten
import Menu from '@/components/Menu'; // Importera Menu-komponenten
export default function HomePage() {
  return (
    <div>
      {/* Hero-komponent */}
      <Hero />

      {/* About-komponent */}
      <About />

      <Menu />

      {/* CallToAction-komponent */}
      <CallToAction />

      <footer>© Bonnatösen {new Date().getFullYear()}</footer>
    </div>
  );
}
