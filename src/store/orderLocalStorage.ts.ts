import { Order } from '../pages/Products/types';

const ORDER_STORAGE_KEY = 'beer_order';

export const loadOrderFromLocalStorage = (): Order | null => {
    try {
      const serialized = localStorage.getItem(ORDER_STORAGE_KEY);
      return serialized ? JSON.parse(serialized) : null;
    } catch (error) {
      console.error('Failed to load order from localStorage', error);
      return null;
    }
  };

export const saveOrderToLocalStorage = (order: Order): void => {
  try {
    const serialized = JSON.stringify(order);
    localStorage.setItem(ORDER_STORAGE_KEY, serialized);
  } catch (error) {
    console.error('Failed to save order to localStorage', error);
  }
};

export const clearOrderFromLocalStorage = (): void => {
  try {
    localStorage.removeItem(ORDER_STORAGE_KEY);
  } catch (error) {
    console.error("Failed to clear order from localStorage", error);
  }
};
