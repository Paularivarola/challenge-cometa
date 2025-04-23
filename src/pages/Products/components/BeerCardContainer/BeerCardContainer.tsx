import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
import {
  addItemToOrder,
  removeItemFromOrder,
} from "../../../../store/orderSlide";
import { BeerCard } from "../BeerCard/BeerCard";
import Button from "../../../../components/Button/Button";
import { useNavigate } from "react-router-dom";
import { Beer } from "../../../../api/types";

interface BeerListContainerProps {
  data: Beer[];
}

const BeerListContainer = ({ data }: BeerListContainerProps) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const orderItems = useAppSelector((state) => state.orders.items);

  const getQuantityOrdered = (name: string): number => {
    return orderItems.find((item) => item.name === name)?.quantity ?? 0;
  };

  const handleAdd = (beer: Beer): void => {
    const orderedQty = getQuantityOrdered(beer.name);
    if (orderedQty < beer.quantity) {
      dispatch(addItemToOrder({ name: beer.name, price: beer.price }));
    }
  };

  const handleRemove = (beer: Beer): void => {
    const orderedQty = getQuantityOrdered(beer.name);
    if (orderedQty > 0) {
      dispatch(removeItemFromOrder({ name: beer.name }));
    }
  };

  return (
    <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 py-10 flex flex-col items-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl">
        {data?.map((beer, index) => (
          <div>
            <BeerCard
              key={index}
              name={beer.name}
              price={beer.price}
              quantity={getQuantityOrdered(beer.name)}
              onAdd={() => handleAdd(beer)}
              onRemove={() => handleRemove(beer)}
              stock={beer.quantity}
            />
          </div>
        ))}
      </div>
      <div className="mt-10 w-full flex justify-center">
        <Button
          disabled={orderItems.length === 0}
          variant="tertiary"
          onClick={() => navigate("/checkout")}
        >
          Checkout
        </Button>
      </div>
    </div>
  );
};

export default BeerListContainer;
