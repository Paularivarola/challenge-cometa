import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import gifBackground from "../../assets/beer.gif";
import { PUBLIC_ROUTES } from "../../routes/routes";

const Home = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(PUBLIC_ROUTES.PRODUCTS);
  };

  return (
    <section className="w-full flex items-center justify-center px-4 py-12 bg-black">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12 max-w-7xl w-full">
        <div className="w-full max-w-md sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
          <img
            src={gifBackground}
            alt="Beer GIF"
            className="rounded-2xl w-full h-auto object-cover shadow-lg"
          />
        </div>
        <div className="text-center lg:text-left space-y-6 max-w-2xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Your After-Work Reward
          </h1>

          <p className="text-gray-400 text-base sm:text-lg leading-relaxed px-2 sm:px-0">
            The workday’s over—now it’s time to unwind. Discover a curated
            selection of cold, refreshing beers perfect for your after-office
            vibe.
          </p>
          <Button onClick={handleClick}>Comenzar</Button>
        </div>
      </div>
    </section>
  );
};

export default Home;
