import { PropsWithChildren } from "react";

const layout = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex items-center justify-center h-screen">{children}</div>
  );
};

export default layout;
