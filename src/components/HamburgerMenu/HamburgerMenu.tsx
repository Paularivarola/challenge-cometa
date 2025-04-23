import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoMdClose } from "react-icons/io";
import { HiMenu } from "react-icons/hi";
import { NavLink } from "react-router-dom";
import { PUBLIC_ROUTES } from "../../routes/routes";

const menuVariants = {
  hidden: { x: "100%" },
  visible: {
    x: 0,
    transition: { type: "tween", duration: 0.3 },
  },
  exit: {
    x: "100%",
    transition: { type: "tween", duration: 0.3 },
  },
};

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="text-3xl text-white p-2 z-50 relative"
        aria-label="Open Menu"
      >
        {isOpen ? <IoMdClose /> : <HiMenu />}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed top-0 right-0 w-3/4 max-w-xs h-full bg-black text-white z-40 shadow-lg p-6"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
          >
            <button
              onClick={() => setIsOpen(false)}
              className="text-2xl absolute top-4 right-4"
              aria-label="Close Menu"
            >
              <IoMdClose />
            </button>

            <nav className="mt-12 flex flex-col space-y-6 text-lg">
              <NavLink
                to={PUBLIC_ROUTES.HOME}
                className={({ isActive }) =>
                  isActive
                    ? "text-yellow-400 font-semibold transition"
                    : "hover:text-yellow-400 transition"
                }
              >
                Home
              </NavLink>

              <NavLink
                to={PUBLIC_ROUTES.PRODUCTS}
                className={({ isActive }) =>
                  isActive
                    ? "text-yellow-400 font-semibold transition"
                    : "hover:text-yellow-400 transition"
                }
              >
                Productos
              </NavLink>

              <NavLink
                to={PUBLIC_ROUTES.ORDERS_COMPLETED}
                className={({ isActive }) =>
                  isActive
                    ? "text-yellow-400 font-semibold transition"
                    : "hover:text-yellow-400 transition"
                }
              >
                Mis ordenes finalizadas
              </NavLink>

              <NavLink
                to={PUBLIC_ROUTES.ORDERS_PENDING}
                className={({ isActive }) =>
                  isActive
                    ? "text-yellow-400 font-semibold transition"
                    : "hover:text-yellow-400 transition"
                }
              >
                Mis ordenes pendientes
              </NavLink>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default HamburgerMenu;
