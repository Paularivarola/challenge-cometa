import { Link } from "react-router-dom";
import Button from "../Button/Button";

const PageNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center px-4 bg-black">
      <h1 className="text-7xl font-extrabold text-yellow-500 mb-4">404</h1>
      <h2 className="text-2xl sm:text-3xl font-semibold text-gray-200 mb-2">
        Página no encontrada
      </h2>
      <p className="text-gray-400 mb-6">
        Lo sentimos, no pudimos encontrar la página que estás buscando.
      </p>

      <Link
        to="/"
      >
        <Button>Volver al inicio</Button>
      </Link>
    </div>
  );
};

export default PageNotFound;
