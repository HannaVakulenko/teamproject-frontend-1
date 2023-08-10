import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <main>
      <h1>4 4</h1>
      <p>
        We’re sorry, the page you requested could not be found. Please go back
        to the homepage.
      </p>
      <Link to={'/'}>Повернутися на головну</Link>
    </main>
  );
};

export default NotFoundPage;
