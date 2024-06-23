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
        content="중앙대학교 소프트웨어학과 학생이 학교 생활에 도움을 받을 수 있는 서비스를 제공하는 동문 네트워크 서비스, Web App Front-end 개발"
        githubURL="https://github.com/CAUCSE/CAUSW_frontend"
        notionURL="https://www.notion.so/officialkyus/93bf29c840d648368181851d2fae3797"
        techStack={[
          "MobX",
          "React",
          "React Router",
          "React Hook Form",
          "Playwright",
          "Emotion",
          "MSW",
          "Vite",
        ]}
      />
      <Project
        period="During Capstone, 2023.02.13 ~ Now"
        title="Dyslexia Zoo Project"
        content="난독증 소아 치료 웹 게임 서비스, Web Front-end 개발"
        githubURL="https://github.com/Capstone-team02-Dyslexia-Cure-Service/Dyslexia_Zoo_FE"
        notionURL="https://officialkyus.notion.site/Dyslexia-Zoo-Project-68e0f0aadb614bd192e501bc77575dad?pvs=4"
        techStack={[
          "Zustand",
          "React",
          "React Router",
          "React Hook Form",
          "Emotion",
          "Recharts",
          "MSW",
          "Vite",
        ]}
      />
      <Project
        period="2024.04.01 ~ Now"
        title="Convo Persona Project"
        content="Chat GPT와 성격 분석 모델을 활용한 사적 대화 서비스, Web Front-end 개발"
        githubURL="https://github.com/2024-1-Open-source-Project-team11/Convo_Persona_FE"
        notionURL="https://officialkyus.notion.site/Convo-Persona-Project-7d91b4ce9be54f1db0446424f073d351?pvs=4"
        techStack={[
          "Zustand",
          "React",
          "React Router",
          "React Hook Form",
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
        isSub={true}
        techStack={["Next.js", "Redux", "React", "TypeScripts"]}
      />
      <Project
        period="During OS Subject, 2024.04.28 ~ 2024.05.05"
        title="Multi Thread Automated Logistics Center Simulator System"
        content="PintOS 환경에서 Multi Thread 구조를 구성하고, 이를 바탕으로 자동화 물류 센터 시뮬레이터 개발"
        githubURL="https://github.com/selfishAltruism/2024_OS_Assignment"
        notionURL="https://officialkyus.notion.site/2024-OS-1st-Assignment-Report-79b42cdeb81d48da89cccef575f04b83?pvs=4"
        isSub={true}
        techStack={["Ubuntu", "C", "PintOS"]}
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
        period="2024.04.20 ~ 2024.04.24"
        title="Chat GPT Detail Study"
        content="Chat GPT 활용 서비스 개발을 위한 Prompt, LLM 공부"
        githubURL="none"
        notionURL="https://officialkyus.notion.site/GPT-Practice-ddef649016a6425194b4641fac9fd3e5?pvs=4"
        isStudy={true}
        techStack={["Chat GPT", "Prompt", "NLP", "ML"]}
      />
      <Project
        period="2024.04.02 ~ Now"
        title="Algorithm Study"
        content="Sort, Dynamic Programming 등 다방면 Algorithm 공부"
        githubURL="https://github.com/selfishAltruism/2024_Algorithm_Assignment"
        notionURL="https://officialkyus.notion.site/Algorithm-324d3a8ff3f74234b17c2e5d074f91da?pvs=4"
        isStudy={true}
        techStack={["Ubuntu", "Python", "JavaScript"]}
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
      <Project
        period="2024.03.14 ~ 2024.03.20"
        title="Back-end Framework Study"
        content="Node.js Framework Nest.js 공부"
        githubURL="none"
        notionURL="https://officialkyus.notion.site/Back-Practice-06dcbdca382f4f578e9b9c695bfff833?pvs=4"
        isStudy={true}
        techStack={["Node.js", "Nest.js"]}
      />
      <div style={{ height: "80px" }}></div>
    </Container>
  );
};

export default Projects;
