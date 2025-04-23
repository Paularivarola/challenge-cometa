import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Order } from "../pages/Products/types";

const getFormattedTimestamp = (): string => {
  const now = new Date();
  const pad = (n: number) => n.toString().padStart(2, "0");
  return `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(
    now.getDate()
  )} ${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(now.getSeconds())}`;
};

const initialState: Order = {
  created: getFormattedTimestamp(),
  paid: false,
  subtotal: 0,
  taxes: 0,
  discounts: 0,
  items: [],
  rounds: [],
};

interface AddItemPayload {
  name: string;
  price: number;
}

interface RemoveItemPayload {
  name: string;
}

const orderSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    addItemToOrder: (state, action: PayloadAction<AddItemPayload>) => {
      const { name, price } = action.payload;

      const existingItem = state.items.find((item) => item.name === name);
      if (existingItem) {
        existingItem.quantity += 1;
        existingItem.total =
          existingItem.quantity * existingItem.price_per_unit;
      } else {
        state.items.push({
          name,
          price_per_unit: price,
          quantity: 1,
          total: price,
        });
      }

      if (state.rounds.length === 0) {
        state.rounds.push({ created: getFormattedTimestamp(), items: [] });
      }

      const currentRound = state.rounds[state.rounds.length - 1];
      const roundItem = currentRound.items.find((item) => item.name === name);

      if (roundItem) {
        roundItem.quantity += 1;
      } else {
        currentRound.items.push({ name, quantity: 1 });
      }

      state.subtotal = state.items.reduce((sum, item) => sum + item.total, 0);
    },

    removeItemFromOrder: (state, action: PayloadAction<RemoveItemPayload>) => {
      const item = state.items.find((i) => i.name === action.payload.name);
      if (!item) return;

      item.quantity -= 1;
      item.total = item.quantity * item.price_per_unit;

      if (item.quantity <= 0) {
        state.items = state.items.filter((i) => i.name !== action.payload.name);
      }

      state.subtotal = state.items.reduce((sum, item) => sum + item.total, 0);
    },

    resetOrder: () => initialState,
  },
});

export const { addItemToOrder, removeItemFromOrder, resetOrder } =
  orderSlice.actions;
export default orderSlice.reducer;
