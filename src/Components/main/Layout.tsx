import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return <div className="bgcolor">{children}</div>;
};

export default Layout;
