import { useNavigate } from "react-router-dom";
import { FaRegCircleCheck } from "react-icons/fa6";
import Button from "../../components/Button/Button";
import { PUBLIC_ROUTES } from "../../routes/routes";

interface CheckoutSuccessProps {
  id: string;
}

const CheckoutSuccess = ({ id }: CheckoutSuccessProps) => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-black text-white px-4 text-center">
      <FaRegCircleCheck size={80} className="text-green-400 mb-6" />
      <h1 className="text-3xl sm:text-4xl font-bold mb-4">Order Successful!</h1>
      <p className="text-lg text-gray-300 mb-2">
        Your order has been placed successfully.
      </p>
      {id && (
        <p className="text-sm text-gray-400 mb-6">
          Order ID: <span className="font-mono text-white">{id}</span>
        </p>
      )}

      <div className="flex flex-col sm:flex-row gap-4">
        <Button
          onClick={() => navigate(PUBLIC_ROUTES.ORDERS_COMPLETED)}
          variant="primary"
        >
          View My Orders
        </Button>
        <Button
          onClick={() => navigate(PUBLIC_ROUTES.PRODUCTS)}
          variant="secondary"
        >
          Continue Shopping
        </Button>
      </div>
    </div>
  );
};

export default CheckoutSuccess;
