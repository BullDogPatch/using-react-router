import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-apart',
      }}
    >
      <h1>Using react-router-dom</h1>
      <Link to={'/about'}>About</Link>
      <Link to={'/contact-me'}>Contact Me</Link>
    </header>
  );
};

export default Header;
