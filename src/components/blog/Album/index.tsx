import Item from "@/components/blog/Album/Item";
import styled from "@emotion/styled";

const AlbumContainer = styled.div({
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: 40,
});

const Album = () => (
  <AlbumContainer>
    {Array.from(Array(9), (_, i) => (
      <Item
        metadata={{
          title: `Test ${i}`,
          authors: ["sungmin.han"],
          createdAt: new Date(Date.UTC(2023, 9, 2, 14, 2)),
        }}
      />
    ))}
  </AlbumContainer>
);

export default Album;
