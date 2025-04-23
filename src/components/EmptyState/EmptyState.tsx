import { ReactNode } from "react";

interface EmptyStateProps {
  icon?: ReactNode;
  message: string;
  title?: string;
  className?: string;
}

const EmptyState = ({
  icon,
  title,
  message,
  className = "",
}: EmptyStateProps) => {
  return (
    <div
      className={`w-full px-4 sm:px-6 md:px-8 flex flex-col items-center justify-center text-center text-gray-400 py-16 sm:py-20 ${className}`}
    >
      {icon && (
        <div className="mb-6 sm:mb-8">
          <div className="text-5xl sm:text-6xl md:text-7xl">{icon}</div>
        </div>
      )}

      {title && <p className="text-lg font-semibold">{title}</p>}
      {message && <p className="text-sm text-gray-500 mt-2">{message}</p>}
    </div>
  );
};

export default EmptyState;
