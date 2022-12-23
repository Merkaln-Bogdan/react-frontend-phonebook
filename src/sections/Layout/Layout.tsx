import { ReactNode } from "react";
import { Container } from "@mui/material";

import { NavBar } from "sections/NavBar/NavBar";

type LayoutProps = {
  children: ReactNode;
};
const Layout = (props: LayoutProps): React.ReactElement => {
  const { children } = { ...props };
  return (
    <Container maxWidth="md">
      <NavBar />
      {children}
    </Container>
  );
};

export { Layout };
