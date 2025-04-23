import React, { ReactNode } from "react";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

const defaultQueryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
      staleTime: 1000 * 60 * 5,
    },
  },
});

interface CustomQueryClientProviderProps {
  children: ReactNode;
  queryClient?: QueryClient;
}

const CustomQueryClientProvider: React.FC<CustomQueryClientProviderProps> = ({
  children
}) => {
  return (
    <QueryClientProvider client={defaultQueryClient}>
      {children}
    </QueryClientProvider>
  );
};

export default CustomQueryClientProvider;
