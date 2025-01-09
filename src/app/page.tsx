import Hero from './components/Hero';
import Today from './components/Today';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Arrival from './components/Arrival';
import Product from './components/Product';
import Music from './components/Music';
import Month from './components/Month';
import Category from './components/Category';







export default function Home() {
  return (
  <div>   
      <Navbar />

  <div className='px-20'>   


      <Hero />

      <Today />

      <Category />

      <Month />

      <Music />

      <Product />

      <Arrival />

  </div>


      <Footer />

  </div>
  );
}
