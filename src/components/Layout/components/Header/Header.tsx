import { NavLink } from "react-router-dom";
import { IoBagOutline, IoBeerOutline, IoBagCheck } from "react-icons/io5";
import Button from "../../../Button/Button";
import { PUBLIC_ROUTES } from "../../../../routes/routes";
import HamburgerMenu from "../../../HamburgerMenu/HamburgerMenu";

const Header = () => {
  return (
    <header className="w-full bg-black z-50">
      <div className="h-[8vh] flex items-center justify-between px-4 sm:px-6">
        <div className="flex lg:hidden bg-transparent">
          <HamburgerMenu />
        </div>
        <div className="hidden lg:flex items-center gap-2">
          <NavLink to={PUBLIC_ROUTES.HOME}>
            {({ isActive }) => (
              <Button variant={isActive ? "secondary" : "tertiary"}>
                <span className="hidden sm:inline">
                  <IoBeerOutline size={20} />
                </span>
              </Button>
            )}
          </NavLink>

          <NavLink to={PUBLIC_ROUTES.PRODUCTS}>
            {({ isActive }) => (
              <Button variant={isActive ? "secondary" : "tertiary"}>
                <span className="hidden sm:inline">Beers</span>
              </Button>
            )}
          </NavLink>

          <NavLink to={PUBLIC_ROUTES.ORDERS_COMPLETED}>
            {({ isActive }) => (
              <Button
                variant={isActive ? "secondary" : "tertiary"}
                className="gap-2"
              >
                <IoBagCheck size={20} />
                <span className="hidden sm:inline">My completed orders</span>
              </Button>
            )}
          </NavLink>

          <NavLink to={PUBLIC_ROUTES.ORDERS_PENDING}>
            {({ isActive }) => (
              <Button
                variant={isActive ? "secondary" : "tertiary"}
                className="gap-2"
              >
                <IoBagOutline size={20} />
                <span className="hidden sm:inline">My pending orders</span>
              </Button>
            )}
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Header;
