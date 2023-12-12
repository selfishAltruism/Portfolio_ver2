import styled from "@emotion/styled";
import { useMediaQuery } from "react-responsive";
import Project from "./Project";

const Projects = () => {
  const isMobile = useMediaQuery({
    query: "(max-width:700px)",
  });

  const Title = styled.span`
    font-size: ${isMobile ? "22px" : "28px"};
    font-weight: bold;
  `;

  const Container = styled.div`
    width: 80%;

    margin-top: ${isMobile ? "20px" : "30px"};

    display: flex;
    flex-direction: column;
    justify-content: center;
  `;
  return (
    <Container>
      <Title>Development Record</Title>
      <Project
        period="During internship, 2023.11.21~2023.11.29"
        title="Severless social login Development"
        content="NextAuth.js를 활용하여 kakao, google, naver 계정으로 로그인 가능한 Serverless social login system 구현"
        githubURL="none"
        notionURL="https://officialkyus.notion.site/Sever-Less-Social-Login-458b881bf2984563ac951bb4f9d7e9ba?pvs=4"
      />
      <Project
        period="During internship, 2023.09.08~2023.11.10, 2023.12.04~"
        title="Grid Project"
        content="타사 Grid library 사용으로 인한 고정 지출 해소와 기능 및 디자인 개선을 위한 다기능 Grid 개발"
        githubURL="none"
        notionURL="https://officialkyus.notion.site/Grid-Project-69e19185b25e47c9be9c6288495f5f08?pvs=4"
      />
      <Project
        period="2021.06.23~2021.12.20"
        title="IT_DA Project"
        content="대학생 카페 공부를 돕는 카페 빈자리 공유 서비스 개발"
        githubURL="https://github.com/selfishAltruism/IT_DA_web_front"
        notionURL="https://officialkyus.notion.site/IT_DA-0977623d68144f3fbb70cd32f5fa7977?pvs=4"
      />
      <Project
        period="During hackathon, 2023.11.12~2023.11.13"
        title="Talent Save Service Development"
        content="대학생 사회적 안전망 구축을 위한 학비 투자 Platform prototype front-end 개발"
        githubURL="https://github.com/UniD3-Hackathon-Team2/TalentStock-fe"
        notionURL="https://www.notion.so/officialkyus/Talent-Save-bba1f23dbd2c4d0989d7f91f94a1b02a"
        isSub={true}
      />
      <Project
        period="2023.11.25~now"
        title="Portfolio ver II"
        content="현재 Page, 자기소개와 개발 기록을 포함한 반응형 Web 개발"
        githubURL="https://github.com/selfishAltruism/Portfolio_ver2"
        notionURL="https://www.notion.so/officialkyus/Portfolio-53c3fa8d76d64c3a825b789d66978a73"
        isSub={true}
      />
      <Project
        period="2023.07.10~2023.07.11"
        title="Portfolio ver I"
        content=""
        githubURL="https://github.com/selfishAltruism/Portfolio"
        notionURL="https://kangsportfolio.netlify.app/"
        isSub={true}
      />
      <Project
        period="During army, 2023.02.21~2023.02.25"
        title="ShipList Development"
        content="군대 내부에서 사용되는 선박일지를 Web으로 구현"
        githubURL="https://github.com/selfishAltruism/ShipList"
        notionURL="https://www.notion.so/officialkyus/ShipList-4fc012ceae984959a73ca235dc42d444"
        isSub={true}
      />
      <Project
        period="2023.12.04"
        title="TDD Study"
        content="Next.js 환경에서 Jest, React testing library, Cypress를 이용한 TDD 환경 구축"
        githubURL="none"
        notionURL="https://officialkyus.notion.site/TDD-898b4841483f45c9946b45dd2abb80e4?pvs=4"
        isStudy={true}
      />
      <div style={{ height: "80px" }}></div>
    </Container>
  );
};

export default Projects;
