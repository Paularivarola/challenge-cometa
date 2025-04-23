import { LuCookingPot } from "react-icons/lu";
import { GrCurrency } from "react-icons/gr";
import { useBeerByName } from "../../api/queries";
import { useParams } from "react-router-dom";
import Loader from "../../components/Loader/Loader";

const ProductDetail = () => {
  const { name } = useParams();
  const { data: beer, isLoading, error } = useBeerByName(name!);

  if (isLoading) return <Loader />;

  if (error || !beer) {
    return (
      <div className="text-red-500 text-center p-6">
        Error loading beer details.
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white px-4 py-8 md:px-16 lg:px-32">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="w-full">
          <div className="w-full h-[50vh] max-h-[50vh] aspect-square overflow-hidden rounded-xl">
            <img
              src={beer.image}
              alt={beer.name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="flex flex-col justify-between space-y-6">
          <div>
            <h1 className="text-3xl font-semibold mb-2">{beer.name}</h1>
            <p className="text-xl font-bold mb-4 text-green-400">
              {beer.currency} {beer.price}
            </p>
            <p className="text-sm text-gray-400 mb-4">
              ⭐ {beer.rating} ({beer.reviews} reviews)
            </p>
          </div>

          <div className="bg-black shadow-xl rounded-xl border border-gray-200 p-6 space-y-6">
            <h2 className="text-md font-semibold mb-2">Description</h2>
            <p className="text-sm text-gray-300">{beer.description}</p>
          </div>

          <div className="bg-black shadow-xl rounded-xl border border-gray-200 p-6 space-y-6">
            <h2 className="text-md font-semibold">Details</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-300">
              <div className="flex items-start gap-4">
                <div className="bg-gray-100 p-3 rounded-xl">
                  <LuCookingPot className="text-black" size={20} />
                </div>
                <div>
                  <p className="font-medium text-white">Ingredients</p>
                  <p className="text-gray-400">
                    {Array.isArray(beer.ingredients)
                      ? beer.ingredients.join(", ")
                      : "No ingredients"}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-gray-100 p-3 rounded-xl">
                  <GrCurrency className="text-black" size={20} />
                </div>
                <div>
                  <p className="font-medium text-white">Price</p>
                  <p className="text-gray-400">{beer.price}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
