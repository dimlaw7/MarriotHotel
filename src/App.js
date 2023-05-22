import Hero from './components/Hero';
import About from './components/About';
import './App.css';
import { Services } from './components/Services';
import Rooms from './components/Rooms';
import Pictures from './components/Pictures';
import Reviews from './components/Reviews';

function App() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Rooms />
      <Pictures />
      <Reviews />
    </>
  );
}

export default App;
