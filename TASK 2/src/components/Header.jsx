import { Link } from 'react-router-dom';
import '../css/defaults.css';

function Header() {
  return (
    <header>
      <div className='container'>
        <Link to='/' className='brand'>
          Let'sGrowMore
        </Link>
        <nav>
          <Link to='/users'>GET USERS</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
