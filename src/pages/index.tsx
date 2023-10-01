import Layout from "@/components/Layout";
import styled from "@emotion/styled";
import React from "react";
import Cover from "../components/blog/Cover";

const HomeContainer = styled.main({
  display: "flex",
  flexDirection: "column",
  rowGap: 120,
  "@media print": {
    rowGap: 60,
  },
});

const Home: React.FC = () => {
  return (
    <Layout>
      <HomeContainer>
        <Cover></Cover>
      </HomeContainer>
    </Layout>
  );
};

export default Home;
