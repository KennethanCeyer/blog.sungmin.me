import Layout from "@/components/Layout";
import PostLayout from "@/components/post/PostLayout";
import { CopyBlock, nord } from "react-code-blocks";

const metadata = {
  title:
    "Lakehouse: A new architecture that merges data lake and data warehouse",
  tags: ["LakeHouse", "레이크하우스", "Data Engineering"],
  authors: ["sungmin.han"],
  createdAt: new Date(Date.UTC(2023, 9, 2, 14, 2)),
};

const Post: React.FC = () => {
  const code = `SELECT user.name, transaction.date, transaction.amount, transaction.product
FROM user
JOIN transaction ON user.id = transaction.user_id
WHERE transaction.amount > 30000;`;
  return (
    <Layout>
      <PostLayout metadata={metadata}>
        <p>
          The world of data is constantly evolving. With such rapid changes, the
          architectures and strategies we use to handle and process data must
          also adapt. This is where the concept of &quot;Lakehouse&quot; enters
          the scene, bridging the capabilities of both data lakes and data
          warehouses.
        </p>

        <h2>Understanding the Basics</h2>

        <h3>Data Lakes</h3>
        <p>
          Data lakes are storage repositories that can hold vast amounts of raw
          data in its native format, be it structured or unstructured. This
          makes them highly flexible and suitable for various data analytics and
          machine learning tasks.
        </p>

        <h3>Data Warehouses</h3>
        <p>
          Data warehouses, on the other hand, are optimized for analysis and
          reporting. They store data in a structured manner, often in tables
          with well-defined schemas, which allows for efficient querying and
          aggregation.
        </p>

        <h2>So, What is a Lakehouse?</h2>

        <p>
          A Lakehouse integrates the flexibility of data lakes with the
          structured querying capabilities of data warehouses. It allows
          organizations to store vast amounts of raw data while also supporting
          advanced analytics tasks, without the need for complex ETL processes
          or moving data between different systems.
        </p>

        <h3>Key Benefits of a Lakehouse:</h3>
        <ul>
          <li>
            <strong>Scalability:</strong> Like data lakes, Lakehouses can store
            massive amounts of data.
          </li>
          <li>
            <strong>Flexibility:</strong> Suitable for both structured and
            unstructured data.
          </li>
          <li>
            <strong>Performance:</strong> Optimized for fast querying, similar
            to data warehouses.
          </li>
          <li>
            <strong>Cost-effective:</strong> Leveraging the storage benefits of
            data lakes and the performance of warehouses can lead to cost
            savings.
          </li>
        </ul>

        <h2>Real-World Applications of Lakehouses</h2>

        <p>
          Companies around the world have begun to see the advantages of using
          the Lakehouse architecture. From big tech to startups, many are
          leveraging it for:
        </p>

        <ol>
          <li>Advanced data analytics and reporting.</li>
          <li>Machine learning and AI model training.</li>
          <li>Real-time data processing and analysis.</li>
          <li>Data integration from various sources.</li>
        </ol>

        <h2>Sample Code</h2>

        <CopyBlock
          text={code}
          language="sql"
          showLineNumbers={true}
          theme={nord}
          codeBlock={false}
          copied={false}
          wrapLongLines={false}
          onCopy={() => {}}
        />

        <h2>Conclusion</h2>

        <p>
          As the data landscape continues to change, the tools and architectures
          we use must keep pace. Lakehouses, as a hybrid approach, offer a
          promising solution to the challenges of modern data storage and
          processing. By bringing together the best of both worlds, they pave
          the way for efficient, flexible, and scalable data operations.
        </p>
      </PostLayout>
    </Layout>
  );
};

export default Post;
