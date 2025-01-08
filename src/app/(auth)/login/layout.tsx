import { PropsWithChildren } from "react";

const layout = ({ children }: PropsWithChildren) => {
  return <main className="h-[600px] md:h-auto">{children}</main>;
};

export default layout;
