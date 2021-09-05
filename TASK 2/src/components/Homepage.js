import Header from './Header';
import Footer from './Footer';
import '../css/style.css';

function Homepage() {
  return (
    <>
      <Header />
      {/* hero section */}
      <section className='hero'>
        <div className='container'>
          <h1>Let'sGrowMore</h1>
        </div>
      </section>``
      <Footer />
    </>
  );
}

export default Homepage;
