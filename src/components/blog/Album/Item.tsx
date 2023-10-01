import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { useCallback } from "react";

interface ItemProps {
  metadata: Metadata;
}

interface Metadata {
  title: string;
  authors: string[];
  createdAt: Date;
}

const ItemContainer = styled.div({
  display: "flex",
  flexDirection: "column",
  borderRadius: 20,
  backgroundColor: "var(--background-color-light)",
  cursor: "pointer",
});

const ItemCover = styled.div({
  height: 200,
  borderBottom: "2px solid var(--font-color-grey)",
  boxSizing: "border-box",
});

const ItemTitle = styled.h3({
  whiteSpace: "nowrap",
  textOverflow: "ellipsis",
  border: 0,
  margin: 0,
  fontSize: 20,
  padding: 20,
  overflow: "hidden",
});

const Item: React.FC<ItemProps> = ({ metadata }) => {
  const router = useRouter();
  const handleClick = useCallback(() => {
    router.push("/posts/1");
  }, [metadata]);
  return (
    <ItemContainer onClick={() => handleClick()}>
      <ItemCover />
      <ItemTitle>{metadata.title}</ItemTitle>
    </ItemContainer>
  );
};

export default Item;
