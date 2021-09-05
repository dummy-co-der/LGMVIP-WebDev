import '../css/defaults.css';

function Footer() {
  let year = new Date().getFullYear();

  return (
    <footer>
      <div className='container'>
        <p>Copyright &copy;Anuj Maheshwari {year}.</p>
      </div>
    </footer>
  );
}

export default Footer;
