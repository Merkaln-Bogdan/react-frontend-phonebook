import { ReactNode } from "react";
import { NavBar } from "sections/NavBar/NavBar";

type LayoutProps = {
  children: ReactNode;
};
const Layout = (props: LayoutProps): React.ReactElement => {
  const { children } = { ...props };
  return (
    <div>
      <NavBar />
      {children}
    </div>
  );
};

export { Layout };
