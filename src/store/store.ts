import { configureStore } from "@reduxjs/toolkit";
import ordersReducer from "./orderSlide";
import {
  saveOrderToLocalStorage,
  loadOrderFromLocalStorage,
} from "./orderLocalStorage.ts";
import { Order } from "../pages/Products/types.ts";

const getFormattedTimestamp = (): string => {
  const now = new Date();
  const pad = (n: number) => n.toString().padStart(2, "0");
  return `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(
    now.getDate()
  )} ${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(now.getSeconds())}`;
};

const fallbackOrder: Order = {
  created: getFormattedTimestamp(),
  paid: false,
  subtotal: 0,
  taxes: 0,
  discounts: 0,
  items: [],
  rounds: [],
};

const preloadedOrder = loadOrderFromLocalStorage() ?? fallbackOrder;

export const store = configureStore({
  reducer: {
    orders: ordersReducer,
  },
  preloadedState: {
    orders: preloadedOrder,
  },
});

store.subscribe(() => {
  const state = store.getState();
  saveOrderToLocalStorage(state.orders);
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
