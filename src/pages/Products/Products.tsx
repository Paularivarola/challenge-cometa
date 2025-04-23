import { useBeerStock } from "../../api/queries";
import Loader from "../../components/Loader/Loader";
import BeerListContainer from "./components/BeerCardContainer/BeerCardContainer";

const Products = () => {
  const { data, isLoading, error } = useBeerStock();

  if (isLoading) return <Loader />;
  if (error)
    return (
      <p className="text-red-500 text-center py-20">Error when loading beers</p>
    );

  return (
    <section className="min-h-screen bg-black px-4 sm:px-6 md:px-8 lg:px-12 py-10">
      <div className="max-w-5xl mx-auto text-center mb-10 px-2">
        <h1 className="text-white text-3xl sm:text-4xl font-extrabold">
          Beers
        </h1>
        <p className="text-base sm:text-lg text-gray-400 mt-2">
          Choose your favorite beers and add them to your order
        </p>
      </div>

      <BeerListContainer data={data?.beers || []} />
    </section>
  );
};
export default Products;
