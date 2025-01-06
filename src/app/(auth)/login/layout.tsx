import { PropsWithChildren } from "react";

const layout = ({ children }: PropsWithChildren) => {
  return <main className="h-screen sm:h-auto">{children}</main>;
};

export default layout;
