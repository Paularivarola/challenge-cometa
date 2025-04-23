interface PaymentDetailsProps {
  handlePayOrder: () => void;
  isPending: boolean;
}

const PaymentDetails = ({ handlePayOrder, isPending }: PaymentDetailsProps) => {
  return (
    <div className="bg-black border border-white text-white p-6 rounded-xl space-y-6">
      <h3 className="text-xl font-bold">Payment Info</h3>

      <div className="space-y-2">
        <p className="text-sm text-gray-400">Payment Method:</p>
        <label className="flex items-center gap-2">
          <input
            type="radio"
            name="payment"
            defaultChecked
            className="accent-white"
          />{" "}
          Credit Card
        </label>
        <label className="flex items-center gap-2">
          <input type="radio" name="payment" className="accent-white" /> PayPal
        </label>
      </div>
      <div className="space-y-2">
        <p className="text-sm text-gray-400">Card Number:</p>
        <p>•••• •••• •••• 1234</p>
      </div>
      <div className="flex flex-col sm:flex-row justify-between gap-4">
        <div>
          <p className="text-sm text-gray-400">Expiration Date:</p>
          <p>06 / 2028</p>
        </div>
        <div>
          <p className="text-sm text-gray-400">CVV:</p>
          <p>201</p>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <input type="checkbox" defaultChecked className="accent-white" />
        <span className="text-sm">Save Payment On File</span>
      </div>

      <button
        onClick={handlePayOrder}
        className="w-full py-3 bg-white text-black rounded-[2rem] font-semibold hover:bg-gray-100 transition"
      >
        {isPending ? "Cargando..." : "Pay"}
      </button>
    </div>
  );
};

export default PaymentDetails;
