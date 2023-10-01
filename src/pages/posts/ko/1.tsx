import Layout from "@/components/Layout";
import PostLayout from "@/components/post/PostLayout";
import { CopyBlock, nord } from "react-code-blocks";

const metadata = {
  title:
    "레이크하우스: 데이터 레이크와 데이터 웨어하우스를 병합한 새로운 아키텍처",
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
          데이터의 세계는 계속해서 발전하고 있습니다. 이런 빠른 변화와 함께,
          데이터를 처리하고 관리하기 위한 아키텍처와 전략도 적응해야 합니다.
          이때 &quot;레이크하우스&quot;라는 개념이 등장하며 데이터 레이크와
          데이터 웨어하우스의 기능을 모두 통합합니다.
        </p>

        <h2>기본 개념 이해하기</h2>

        <h3>데이터 레이크</h3>
        <p>
          데이터 레이크는 원시 데이터를 그대로 저장할 수 있는 저장소로,
          구조화되거나 비구조화된 형태 모두 가능합니다. 이로 인해 다양한 데이터
          분석 및 기계 학습 작업에 적합합니다.
        </p>

        <h3>데이터 웨어하우스</h3>
        <p>
          반면, 데이터 웨어하우스는 분석 및 보고에 최적화되어 있습니다. 잘
          정의된 스키마의 테이블에서 구조화된 방식으로 데이터를 저장하여
          효율적인 질의 및 집계가 가능합니다.
        </p>

        <h2>그렇다면 레이크하우스란?</h2>

        <p>
          레이크하우스는 데이터 레이크의 유연성과 데이터 웨어하우스의 구조화된
          질의 기능을 통합합니다. 그것은 조직이 대량의 원시 데이터를
          저장하면서도 복잡한 ETL 프로세스나 다양한 시스템 간의 데이터 이동 없이
          고급 분석 작업을 지원하도록 합니다.
        </p>

        <h3>레이크하우스의 주요 이점:</h3>
        <ul>
          <li>
            <strong>확장성:</strong> 데이터 레이크처럼 레이크하우스도 대량의
            데이터를 저장할 수 있습니다.
          </li>
          <li>
            <strong>유연성:</strong> 구조화된 데이터뿐만 아니라 비구조화된
            데이터에도 적합합니다.
          </li>
          <li>
            <strong>성능:</strong> 데이터 웨어하우스처럼 빠른 쿼리에 최적화되어
            있습니다.
          </li>
          <li>
            <strong>비용 효율적:</strong> 데이터 레이크의 저장 이점과
            웨어하우스의 성능을 활용하면 비용 절감이 가능합니다.
          </li>
        </ul>

        <h2>레이크하우스의 실제 응용 사례</h2>

        <p>
          전 세계의 기업들은 레이크하우스 아키텍처의 장점을 알아차리기
          시작했습니다. 대기업부터 스타트업까지 많은 기업들이 다음과 같은 작업을
          위해 이를 활용하고 있습니다:
        </p>

        <ol>
          <li>고급 데이터 분석 및 보고서 작성.</li>
          <li>기계 학습 및 AI 모델 훈련.</li>
          <li>실시간 데이터 처리 및 분석.</li>
          <li>다양한 소스에서의 데이터 통합.</li>
        </ol>

        <h2>예제 코드</h2>

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

        <h2>결론</h2>

        <p>
          데이터의 환경이 계속 변화함에 따라, 우리가 사용하는 도구와 아키텍처도
          그에 따라 발전해야 합니다. 레이크하우스는 현대 데이터 저장 및 처리의
          도전과제에 대한 유망한 해결책을 제공합니다. 두 세계의 최고의 부분을
          결합하여 효율적이고 유연하며 확장 가능한 데이터 작업을 위한 길을
          엽니다.
        </p>
      </PostLayout>
    </Layout>
  );
};

export default Post;
