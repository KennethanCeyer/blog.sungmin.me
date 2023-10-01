import Layout from "@/components/Layout";
import Album from "@/components/blog/Album";
import Cover from "@/components/blog/Cover";
import styled from "@emotion/styled";
import React from "react";

const HomeContainer = styled.main({
  display: "flex",
  flexDirection: "column",
  rowGap: 40,
});

const Section = styled.section();

const Home: React.FC = () => {
  return (
    <Layout main={true}>
      <HomeContainer>
        <Cover></Cover>
        <Section>
          <h1>The deep-phase of Engineering</h1>
          <Album></Album>
        </Section>
      </HomeContainer>
    </Layout>
  );
};

export default Home;
