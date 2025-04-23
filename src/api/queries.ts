import { useNavigate } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { ApiError } from "./utils/errorHandler";
import { getBeerByName, getBeerStock, getOrders, saveOrder } from "../services/ordersService";
import { clearOrderFromLocalStorage } from "../store/orderLocalStorage.ts";
import { useAppDispatch } from "../store/hooks.ts";
import { resetOrder } from "../store/orderSlide.ts";
import { QUERY_KEYS } from "./queryKeys.ts";

export const useOrders = () => {
  const query = useQuery({
    queryKey: QUERY_KEYS.ORDERS,
    queryFn: getOrders,
  });

  return {
    ...query,
    error: query.error as ApiError,
  };
};

export const useSaveOrder = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const mutation = useMutation({
    mutationFn: saveOrder,
    onSuccess: (newOrderId) => {
      clearOrderFromLocalStorage();
      dispatch(resetOrder());
      queryClient.invalidateQueries({ queryKey: QUERY_KEYS.ORDERS });
      queryClient.invalidateQueries({ queryKey: QUERY_KEYS.BEER_STOCK });
      navigate(`/checkout/success/${newOrderId}`);
    },
  });

  return {
    ...mutation,
    error: mutation.error as ApiError,
  };
};

export const useBeerStock = () => {
  return useQuery({
    queryKey: QUERY_KEYS.BEER_STOCK,
    queryFn: getBeerStock,
  });
};

export const useBeerByName = (name: string) => {
  return useQuery({
    queryKey: ["beer-detail", name],
    queryFn: () => getBeerByName(name),
    enabled: !!name,
    retry: false,
  });
};