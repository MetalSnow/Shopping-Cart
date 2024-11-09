import { CircleOff } from 'lucide-react';
import { useRouteError } from 'react-router-dom';

function ErrorPage() {
  const error = useRouteError();
  console.error(error);
  return (
    <div className="error-message">
      <h1>{error.status}</h1>
      <h2>
        <CircleOff />
        Page {error.statusText}
        <CircleOff />
      </h2>
    </div>
  );
}

export default ErrorPage;
