import { useOrders } from "../../api/queries";
import CardCompletedOrder from "../../components/CardCompletedOrder/CardCompletedOrder";
import { LuBeerOff } from "react-icons/lu";
import EmptyState from "../../components/EmptyState/EmptyState";
import Loader from "../../components/Loader/Loader";

const CompletedOrders = () => {
  const { data = [], isLoading, error } = useOrders();

  if (isLoading) return <Loader />;
  if (error) {
    return (
      <p className="text-red-500 text-center py-20">
        An error occurred while loading the orders.
      </p>
    );
  }

  if (!data.length) {
    return (
      <EmptyState
        icon={<LuBeerOff size={60} />}
        message="No completed orders found."
      />
    );
  }

  return (
    <div className="p-4">
      <h2 className="text-2xl sm:text-3xl font-bold text-white py-6">
        Completed Orders
      </h2>
      <div className="flex flex-wrap gap-6 justify-center lg:justify-start">
        {data?.map((order, index) => (
          <CardCompletedOrder key={index} orderData={order} />
        ))}
      </div>
    </div>
  );
};

export default CompletedOrders;
