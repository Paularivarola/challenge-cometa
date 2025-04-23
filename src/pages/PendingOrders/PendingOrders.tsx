import Button from "../../components/Button/Button";
import TwoColumnLayout from "../../components/TwoColumnLayout/TwoColumnLayout";
import OrderSummary from "../Products/components/OrderSummary/OrderSummary";
import { useNavigate } from "react-router-dom";
import gifBackground from "../../assets/beer-animated.gif";
import { IoIosArrowForward } from "react-icons/io";
import { PUBLIC_ROUTES } from "../../routes/routes";
import { useAppSelector } from "../../store/hooks";
import EmptyState from "../../components/EmptyState/EmptyState";

const PendingOrders = () => {
  const navigate = useNavigate();
  const { items } = useAppSelector((state) => state.orders);
  if (items.length === 0) {
    return (
      <EmptyState
        title="No pending orders"
        message="When you select a beer, you will see the summary here"
      />
    );
  }
  return (
    <div>
      <TwoColumnLayout
        title="Detail of your pending order"
        left={
          <>
            <OrderSummary />
            <Button
              variant="tertiary"
              onClick={() => navigate(PUBLIC_ROUTES.CHECKOUT)}
              title="Checkout"
              className="gap-2"
            >
              <span>Checkout</span>
              <IoIosArrowForward className="text-white" />
            </Button>
          </>
        }
        right={
          <img
            src={gifBackground}
            alt="Beer GIF"
            className="w-full max-w-md sm:max-w-lg lg:max-w-xl h-auto rounded-2xl object-cover shadow-lg"
          />
        }
      />
    </div>
  );
};

export default PendingOrders;
