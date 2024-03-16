import styled from "@emotion/styled";
import { useMediaQuery } from "react-responsive";
import Project from "./Project";

import { Title1 } from "./style/title";

const Projects = () => {
  const isMobile = useMediaQuery({
    query: "(max-width:700px)",
  });

  const Container = styled.div`
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  `;

  return (
    <Container>
      <Title1>Dev Record</Title1>
      <Project
        period="2023.12.23 ~ Now"
        title="CAUSW Project"
        content="중앙대학교 소프트웨어학과 학생이 학교 생활에 도움을 받을 수 있는 각종 서비스를 제공하는 동문 네트워크 서비스, Web Front-end 개발"
        githubURL="https://github.com/CAUCSE/CAUSW_frontend"
        notionURL="https://www.notion.so/officialkyus/93bf29c840d648368181851d2fae3797"
        techStack={[
          "MobX",
          "React",
          "React Router",
          "React Hook Form",
          "Playwright",
          "Emotion",
          "Vite",
        ]}
      />
      <Project
        period="During Internship, 2023.09.08 ~ 2023.11.10, 2023.12.04 ~ 2023.12.20"
        title="Grid Project"
        content="타사 Grid Library 사용으로 인한 고정 지출 해소와 기능 및 디자인 개선을 위한 다기능 Grid 개발"
        githubURL="none"
        notionURL="https://officialkyus.notion.site/Grid-Project-69e19185b25e47c9be9c6288495f5f08?pvs=4"
        techStack={[
          "Redux",
          "React",
          "React Context",
          "React Hook Form",
          "TypeScripts",
          "JavaScript",
        ]}
      />
      <Project
        period="During Internship, 2023.11.21 ~ 2023.11.29"
        title="Severless Social Login Development"
        content="NextAuth.js를 활용하여 Kakao, Google, Naver 계정으로 로그인 가능한 Serverless Social Login System 구현"
        githubURL="none"
        notionURL="https://officialkyus.notion.site/Sever-Less-Social-Login-458b881bf2984563ac951bb4f9d7e9ba?pvs=4"
        techStack={["Next.js", "Redux", "React", "TypeScripts"]}
      />
      <Project
        period="2021.06.23 ~ 2021.12.20"
        title="IT_DA Project"
        content="대학생 카페 공부를 돕는 카페 빈자리 공유 서비스 개발"
        githubURL="https://github.com/selfishAltruism/IT_DA_web_front"
        notionURL="https://officialkyus.notion.site/IT_DA-0977623d68144f3fbb70cd32f5fa7977?pvs=4"
        isSub={true}
        techStack={["JavaScript", "OpenCV", "Apps Script"]}
      />
      <Project
        period="During Hackathon, 2023.11.12 ~ 2023.11.13"
        title="Talent Save Service Development"
        content="대학생 사회적 안전망 구축을 위한 학비 투자 Platform Prototype Front-end 개발"
        githubURL="https://github.com/UniD3-Hackathon-Team2/TalentStock-fe"
        notionURL="https://www.notion.so/officialkyus/Talent-Save-bba1f23dbd2c4d0989d7f91f94a1b02a"
        isSub={true}
        techStack={["React", "Axios", "React Context"]}
      />
      <Project
        period="2023.11.25 ~ Now"
        title="Portfolio Ver II"
        content="현재 Page, 자기소개와 개발 기록을 포함한 PC, Mobile 반응형 Web 개발"
        githubURL="https://github.com/selfishAltruism/Portfolio_ver2"
        notionURL="https://www.notion.so/officialkyus/Portfolio-53c3fa8d76d64c3a825b789d66978a73"
        isSub={true}
        techStack={[
          "React",
          "React Context",
          "TypeScripts",
          "react-responsive",
        ]}
      />
      <Project
        period="2023.07.10 ~ 2023.07.11"
        title="Portfolio Ver I"
        content=""
        githubURL="https://github.com/selfishAltruism/Portfolio"
        notionURL="https://kangsportfolio.netlify.app/"
        isSub={true}
        techStack={["React", "React Context", "JavaScript"]}
      />
      <Project
        period="During Army, 2023.02.21 ~ 2023.02.25"
        title="ShipList Development"
        content="군대 내부에서 사용되는 선박일지 프로그램 개발"
        githubURL="https://github.com/selfishAltruism/ShipList"
        notionURL="https://www.notion.so/officialkyus/ShipList-4fc012ceae984959a73ca235dc42d444"
        isSub={true}
        techStack={["JavaScript"]}
      />
      <Project
        period="2024.03.14 ~ Now"
        title="Back-end Framework Study"
        content="Node.js Framework Nest.js 공부"
        githubURL="none"
        notionURL="https://officialkyus.notion.site/Back-Practice-06dcbdca382f4f578e9b9c695bfff833?pvs=4"
        isStudy={true}
        techStack={["Node.js", "Nest.js"]}
      />
      <Project
        period="2023.12.04"
        title="Front-end TDD Study"
        content="Next.js 환경에서 Jest, React Testing Library, Cypress를 이용한 TDD 환경 구축 공부"
        githubURL="none"
        notionURL="https://officialkyus.notion.site/TDD-898b4841483f45c9946b45dd2abb80e4?pvs=4"
        isStudy={true}
        techStack={["Jest", "Cypress"]}
      />
      <div style={{ height: "80px" }}></div>
    </Container>
  );
};

export default Projects;
