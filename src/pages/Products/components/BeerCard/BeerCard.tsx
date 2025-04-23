import { useNavigate } from "react-router-dom";
import Button from "../../../../components/Button/Button";
import { RiBeerLine } from "react-icons/ri";
import { PUBLIC_ROUTES } from "../../../../routes/routes";

interface BeerCardProps {
  key: number;
  name: string;
  price: number;
  quantity: number;
  stock: number;
  onAdd: () => void;
  onRemove: () => void;
}

export const BeerCard = ({
  key,
  name,
  price,
  quantity,
  stock,
  onAdd,
  onRemove,
}: BeerCardProps) => {
  const navigate = useNavigate();

  const handleNavigate = () => navigate(`${PUBLIC_ROUTES.PRODUCTS}/${name}`);

  return (
    <div
      key={key}
      role="button"
      tabIndex={0}
      className="cursor-pointer w-full max-w-sm sm:max-w-md md:max-w-lg bg-black text-white rounded-3xl p-4 shadow-lg space-y-4 border mx-auto"
      onClick={handleNavigate}
    >
      <div className="flex justify-between items-start">
        <div className="flex items-center gap-3">
          <div className="bg-gray-100 p-3 rounded-xl">
            <RiBeerLine className="text-black" size={20} />
          </div>
          <div>
            <h2 className="text-lg sm:text-xl font-semibold">{name}</h2>
          </div>
        </div>
      </div>

      <p className="text-sm text-gray-300">Stock: {stock}</p>

      <div className="flex flex-col sm:flex-row justify-between sm:items-center border-t border-gray-400 pt-4 gap-4 sm:gap-0">
        <div className="text-white text-lg sm:text-xl">${price}</div>

        <div
          className="flex items-center gap-2"
          onClick={(e) => e.stopPropagation()}
        >
          <Button
            onClick={onRemove}
            disabled={quantity === 0}
            className="bg-red-500 text-white px-3 py-1 rounded disabled:opacity-50"
          >
            -
          </Button>
          <span className="min-w-[24px] text-center">{quantity}</span>
          <Button
            onClick={onAdd}
            disabled={quantity === stock}
            className="bg-green-500 text-white px-3 py-1 rounded disabled:opacity-50"
          >
            +
          </Button>
        </div>
      </div>
    </div>
  );
};
