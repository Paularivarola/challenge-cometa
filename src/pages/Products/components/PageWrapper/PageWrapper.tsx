import { motion, useIsPresent } from "framer-motion";
import { ReactNode } from "react";

interface PageWrapperProps {
  children: ReactNode;
}

export const PageWrapper = ({ children }: PageWrapperProps) => {
  const isPresent = useIsPresent();

  return (
    <motion.div
      className="w-full h-full absolute top-0 left-0"
      initial={{ x: "-100%", y: "100%", opacity: 0 }}
      animate={{ x: "0%", y: "0%", opacity: 1 }}
      exit={{ x: "100%", y: "-100%", opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      style={{ viewTransitionName: isPresent ? "page" : undefined }}
    >
      {children}
    </motion.div>
  );
};
