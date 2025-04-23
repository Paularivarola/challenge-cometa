import { RiBeerLine } from "react-icons/ri";
import { useAppSelector } from "../../../../store/hooks";
import EmptyState from "../../../../components/EmptyState/EmptyState";

const OrderSummary = () => {
  const { items, subtotal, taxes, discounts } = useAppSelector(
    (state) => state.orders
  );
  const total = subtotal + taxes - discounts;

  if (items.length === 0) {
    return (
      <EmptyState
        title="No pending orders"
        message="Once you select a beer, the summary will appear here"
      />
    );
  }

  return (
    <>
      <div className="hidden sm:grid grid-cols-4 text-sm font-semibold text-gray-500 border-b border-gray-200 pb-2 mb-4">
        <div>Product</div>
        <div className="text-center">Quantity</div>
        <div className="text-center">Unit Price</div>
        <div className="text-right">Total</div>
      </div>

      <div className="space-y-6">
        {items.map((item) => (
          <div
            key={item.name}
            className="flex flex-col sm:grid sm:grid-cols-4 border-b border-gray-200 pb-4 mb-4 gap-4"
          >
            <div className="flex items-center gap-4">
              <div className="bg-gray-100 p-3 rounded-xl">
                <RiBeerLine size={20} />
              </div>
              <div>
                <p className="font-semibold text-gray-400">{item.name}</p>
                <p className="text-sm text-gray-500 sm:hidden">Craft beer</p>
              </div>
            </div>
            <div className="flex justify-between sm:justify-center sm:items-center text-sm font-medium text-gray-400">
              <span className="sm:hidden font-semibold text-gray-500">
                Quantity:
              </span>
              <span className="sm:text-center">{item.quantity}</span>
            </div>

            <div className="flex justify-between sm:justify-center sm:items-center text-sm font-medium text-gray-400">
              <span className="sm:hidden font-semibold text-gray-500">
                Unit Price:
              </span>
              <span className="sm:text-center">
                ${item.price_per_unit.toFixed(2)}
              </span>
            </div>

            <div className="flex justify-between sm:justify-end sm:items-center text-sm font-semibold text-gray-400">
              <span className="sm:hidden font-semibold text-gray-500">
                Total:
              </span>
              <span className="sm:text-right">${item.total.toFixed(2)}</span>
            </div>
          </div>
        ))}
        <div className="text-left sm:text-right space-y-2">
          <p>
            <span className="text-gray-400">Subtotal:</span>{" "}
            <span className="font-semibold text-gray-400">
              ${subtotal.toFixed(2)}
            </span>
          </p>
          <p>
            <span className="text-gray-400">Taxes:</span>{" "}
            <span className="font-semibold text-gray-400">
              ${taxes.toFixed(2)}
            </span>
          </p>
          <p>
            <span className="text-gray-400">Discounts:</span>{" "}
            <span className="font-semibold text-gray-400">
              -${discounts.toFixed(2)}
            </span>
          </p>
          <p className="text-lg font-bold text-white border-t border-gray-200 py-4">
            Total: ${total.toFixed(2)}
          </p>
        </div>
      </div>
    </>
  );
};

export default OrderSummary;
