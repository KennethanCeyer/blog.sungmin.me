import PostTitle from "@/components/post/PostTitle";
import styled from "@emotion/styled";

interface PostLayoutProps {
  children: React.ReactNode;
  metadata: PostLayoutMetadata;
}

interface PostLayoutMetadata {
  title: string;
  tags: string[];
  authors: string[];
  cover?: string;
  createdAt: Date;
}

const PostLayoutContainer = styled.div({});

const PostLayout: React.FC<PostLayoutProps> = ({
  children,
  metadata,
}: PostLayoutProps) => (
  <PostLayoutContainer>
    <PostTitle>{metadata.title}</PostTitle>
    {children}
  </PostLayoutContainer>
);

export default PostLayout;
