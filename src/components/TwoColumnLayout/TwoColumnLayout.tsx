import { ReactNode } from "react";

interface TwoColumnLayoutProps {
  title: string;
  left: ReactNode;
  right?: ReactNode;
}

const TwoColumnLayout = ({ title, left, right }: TwoColumnLayoutProps) => {
  return (
    <div className="px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-7xl mx-auto p-4 sm:p-6 md:p-10 lg:p-12 flex flex-col lg:flex-row gap-6 lg:gap-16">
        <div className="w-full lg:w-1/2 space-y-8 order-2 lg:order-1">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">{title}</h2>
          {left}
        </div>
        <div className="w-full lg:w-[420px] order-1 lg:order-2">{right}</div>
      </div>
    </div>
  );
};

export default TwoColumnLayout;
