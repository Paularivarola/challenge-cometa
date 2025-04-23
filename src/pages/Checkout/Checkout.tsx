import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import { IoIosArrowBack } from "react-icons/io";
import TwoColumnLayout from "../../components/TwoColumnLayout/TwoColumnLayout";
import OrderSummary from "../Products/components/OrderSummary/OrderSummary.tsx";
import PaymentDetails from "../Products/components/PaymentDetails/PaymentDetails.tsx";
import {
  clearOrderFromLocalStorage,
  loadOrderFromLocalStorage,
} from "../../store/orderLocalStorage.ts";
import { useSaveOrder } from "../../api/queries.ts";
import { useState } from "react";
import CheckoutSuccess from "../CheckoutSuccess/CheckoutSuccess.tsx";
import { PUBLIC_ROUTES } from "../../routes/routes.ts";

const Checkout = () => {
  const { mutate: saveOrder, isPending } = useSaveOrder();
  const navigate = useNavigate();
  const [purchaseId, setPurchaseId] = useState<string | null>(null);

  const handlePayOrder = () => {
    const localOrder = loadOrderFromLocalStorage();
    if (!localOrder) return;

    const orderPayload = {
      ...localOrder,
      paid: true,
    };

    saveOrder(orderPayload, {
      onSuccess: (id) => {
        clearOrderFromLocalStorage();
        setPurchaseId(id);
      },
      onError: (error) => {
        console.error("Error al guardar la orden:", error);
      },
    });
  };

  if (purchaseId) return <CheckoutSuccess id={purchaseId} />;

  return (
    <div className="px-4 sm:px-6 lg:px-8 min-h-screen">
      <TwoColumnLayout
        title="Check Out"
        left={
          <>
            <OrderSummary />
            <Button
              variant="icon-gray-circle"
              onClick={() => navigate(PUBLIC_ROUTES.PRODUCTS)}
              title="Back to my order"
            >
              <IoIosArrowBack className="w-10 h-10 text-black" />
            </Button>
          </>
        }
        right={
          <PaymentDetails
            handlePayOrder={handlePayOrder}
            isPending={isPending}
          />
        }
      />
    </div>
  );
};

export default Checkout;
