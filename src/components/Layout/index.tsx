import Header from "@/components/Header";
import styled from "@emotion/styled";
import React from "react";

interface LayoutProps {
  main?: boolean;
  header?: boolean;
  children?: React.ReactNode;
}

const LayoutContainer = styled.main({
  height: "100vh",
  "@media print": {
    height: "auto",
  },
});

interface BodyStyleProps {
  header?: boolean;
}

const Body = styled.div<BodyStyleProps>(({ header }) => ({
  height: header ? "calc(100% - 60px)" : "120vh",
  boxSizing: "border-box",
  overflowY: "auto",
  "@media print": {
    overflow: "visible",
  },
}));

interface BodyInnerStyleProps {
  main?: boolean;
}

const BodyInner = styled.div<BodyInnerStyleProps>(({ main }) => ({
  position: "relative",
  width: main ? 1400 : 940,
  minHeight: "100%",
  margin: "0 auto",
  padding: "80px 0",
  overflow: "hidden",
  boxSizing: "border-box",
  "@media print": {
    width: "100%",
    padding: 0,
  },
}));

const Layout: React.FC<LayoutProps> = ({
  main = false,
  header = true,
  children,
}) => (
  <LayoutContainer>
    {header && <Header />}
    <Body header={header}>
      <BodyInner main={main}>{children}</BodyInner>
    </Body>
  </LayoutContainer>
);

export default Layout;
