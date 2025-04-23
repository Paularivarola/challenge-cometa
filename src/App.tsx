import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";
import NavigationRoutes from "./routes/NavigationRoutes";
import Layout from "./components/Layout/Layout";
import { store } from "./store/store";

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        retry: 1,
        staleTime: 1000 * 60 * 5,
      },
    },
  });

  return (
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <BrowserRouter>
            <Layout>
              <NavigationRoutes />
            </Layout>
          </BrowserRouter>
        </Provider>
      </QueryClientProvider>
    </ErrorBoundary>
  );
}

export default App;
