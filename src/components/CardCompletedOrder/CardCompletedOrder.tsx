import { Order } from "../../pages/Products/types";

interface CardCompletedOrderProps {
  orderData: Order;
}
const CardCompletedOrder = ({ orderData }: CardCompletedOrderProps) => {
  const {
    created,
    paid,
    subtotal,
    taxes,
    discounts,
    items = [],
    rounds = [],
  } = orderData;

  return (
    <div className="w-full sm:w-[90%] md:w-[45%] lg:w-[32%] xl:w-[30%] bg-black shadow-xl rounded-xl border border-gray-200 p-6 space-y-6">
      <div>
        <h2 className="text-lg font-semibold text-gray-400">Order Details</h2>
        <p className="mt-2 text-3xl font-bold text-white">${subtotal}</p>
      </div>
      <div className="border-t border-white pt-4">
        <h3 className="text-sm font-medium text-gray-400 mb-2">
          Order Summary
        </h3>
        <div className="space-y-1 text-sm text-gray-400">
          <div className="flex justify-between">
            <span>Status</span>
            <span
              className={`font-semibold px-2 py-0.5 rounded-full text-xs ${
                paid
                  ? "text-green-600 bg-green-100"
                  : "text-yellow-600 bg-yellow-100"
              }`}
            >
              {paid ? "Paid" : "Pending"}
            </span>
          </div>
          <div className="flex justify-between">
            <span>Created on</span>
            <span>{created}</span>
          </div>
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>${subtotal}</span>
          </div>
          <div className="flex justify-between">
            <span>Taxes</span>
            <span>${taxes}</span>
          </div>
          <div className="flex justify-between">
            <span>Discounts</span>
            <span>${discounts}</span>
          </div>
        </div>
        <h4 className="text-sm font-medium text-gray-400 mt-4">Items</h4>
        {items.length > 0 ? (
          <ul className="text-sm text-gray-600 space-y-1">
            {items.map((item, idx) => (
              <li key={idx} className="flex justify-between">
                <span>
                  {item.name} x{item.quantity}
                </span>
                <span>${item.total}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-sm text-gray-500 italic">
            No items in this order.
          </p>
        )}
      </div>

      <div className="border-t pt-4">
        <h3 className="text-sm font-medium text-gray-400 mb-2">Rounds</h3>
        {rounds.length > 0 ? (
          rounds.map((round, idx) => (
            <div key={idx} className="text-sm text-gray-400 space-y-1">
              <div className="flex justify-between">
                <span>Created</span>
                <span>{round.created}</span>
              </div>
              <ul className="mt-1">
                {round.items.map((item, i) => (
                  <li key={i} className="flex justify-between">
                    <span>{item.name}</span>
                    <span>x{item.quantity}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))
        ) : (
          <p className="text-sm text-gray-500 italic">
            No rounds in this order.
          </p>
        )}
      </div>
    </div>
  );
};
export default CardCompletedOrder;