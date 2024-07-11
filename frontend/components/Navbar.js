import Link from "next/link";

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div>
        <Link className='navbar-item logo' href='/'>
          AptFinder
        </Link>
      </div>
      <ul className='nav-links'>
        <li>
          <Link className='navbar-item' href='/apartments/'>
            Find
          </Link>
        </li>
        <li>
          <Link className='navbar-item' href='/apartments/create'>
            Create
          </Link>
        </li>
        <li>
          <Link className='navbar-item' href='/about'>
            About
          </Link>
        </li>
        <li>
          <Link className='navbar-item' href='/contact'>
            Contact Us
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
