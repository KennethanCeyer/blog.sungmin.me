import Header from "@/components/Header";
import styled from "@emotion/styled";
import React from "react";

interface LayoutProps {
  header?: boolean;
  children?: React.ReactNode;
}

const LayoutContainer = styled.main({
  height: "100vh",
  backgroundColor: "#FFFFFF",
  "@media print": {
    height: "auto",
  },
});

interface BodyStyleProps {
  header?: boolean;
}
const Body = styled.div<BodyStyleProps>(({ header }: BodyStyleProps) => ({
  height: header ? "calc(100% - 60px)" : "120vh",
  boxSizing: "border-box",
  overflowY: "auto",
  "@media print": {
    overflow: "visible",
  },
}));
const BodyInner = styled.div({
  position: "relative",
  width: 940,
  minHeight: "100%",
  margin: "0 auto",
  padding: "80px 0",
  overflow: "hidden",
  boxSizing: "border-box",
  "@media print": {
    width: "100%",
    padding: 0,
  },
});

const Layout: React.FC<LayoutProps> = ({ header = true, children }) => (
  <LayoutContainer>
    {header && <Header />}
    <Body header={header}>
      <BodyInner>{children}</BodyInner>
    </Body>
  </LayoutContainer>
);

export default Layout;
