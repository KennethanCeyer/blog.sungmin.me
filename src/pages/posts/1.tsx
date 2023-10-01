import Layout from "@/components/Layout";
import PostLayout from "@/components/post/PostLayout";

const metadata = {
  title:
    "레이크하우스: 데이터 레이크와 데이터 웨어하우스를 병합한 새로운 아키텍처",
  tags: ["LakeHouse", "레이크하우스", "Data Engineering"],
  authors: ["sungmin.han"],
  createdAt: new Date(Date.UTC(2023, 9, 2, 14, 2)),
};

const Post: React.FC = () => (
  <Layout>
    <PostLayout metadata={metadata}>Hello</PostLayout>
  </Layout>
);

export default Post;
