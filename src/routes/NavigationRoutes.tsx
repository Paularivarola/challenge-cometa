import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { PUBLIC_ROUTES } from "../routes/routes";
import Loader from "../components/Loader/Loader";

const NavigationRoutes = () => {
  const Home = lazy(() => import("../pages/Home/Home"));
  const Products = lazy(() => import("../pages/Products/Products"));
  const ProductDetail = lazy(
    () => import("../pages/ProductDetail/ProductDetail")
  );
  const PendingOrders = lazy(
    () => import("../pages/PendingOrders/PendingOrders")
  );
  const Checkout = lazy(() => import("../pages/Checkout/Checkout"));
  const PageNotFound = lazy(
    () => import("../components/PageNotFound/PageNotFound")
  );
  const CompletedOrders = lazy(
    () => import("../pages/CompletedOrders/CompletedOrders")
  );

  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path={`${PUBLIC_ROUTES.HOME}/`} element={<Home />} />
        <Route
          path={`${PUBLIC_ROUTES.ORDERS_PENDING}/`}
          element={<PendingOrders />}
        />
        <Route path={`${PUBLIC_ROUTES.PRODUCTS}/`} element={<Products />} />
        <Route
          path={`${PUBLIC_ROUTES.PRODUCT_DETAIL}/`}
          element={<ProductDetail />}
        />
        <Route
          path={PUBLIC_ROUTES.ORDERS_COMPLETED}
          element={<CompletedOrders />}
        />
        <Route path={PUBLIC_ROUTES.CHECKOUT} element={<Checkout />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Suspense>
  );
};

export default NavigationRoutes;
