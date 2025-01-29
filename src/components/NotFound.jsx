import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div>
      <h3>Not Found :(</h3>
      <Link to='/'>Back Home</Link>
    </div>
  );
};

export default NotFound;
