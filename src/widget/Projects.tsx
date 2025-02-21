import styled from "@emotion/styled";
import { useMediaQuery } from "react-responsive";

import { useState } from "react";

import { Project } from "src/widget";
import { Title1, RowBar } from "src/entities";

export const Projects = () => {
  const [seeMore, setSeeMore] = useState(false);
  const [seeMoreStudy, setSeeMoreStudy] = useState(false);

  const isMobile = useMediaQuery({
    query: "(max-width:700px)",
  });

  const Container = styled.div`
    width: 90vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
  `;

  return (
    <Container>
      <Title1>Career Dev Log</Title1>
      <RowBar width="100%" />
      <Project
        period="Working, 2024.11.25 ~ Now"
        title="AKEO Web Service"
        content={
          <span>
            AI 코딩 교육 웹 서비스, AKEO
            <br /> Markdown & 코드 에디터 개발, 파일 뷰어 개발, 웹 서비스 내부
            렌더링 개선
          </span>
        }
        company
        githubURL="https://www.akeoedu.com/"
        notionURL="none"
        // notionURL="https://officialkyus.notion.site/AKEO-Service-Dev-Log-18b48a0856d4807eb047cfd137ca18db?pvs=4"
        techStack={[
          "Next.js",
          "Zustand",
          "Tailwind",
          "ESLint",
          "Tiptap",
          "react-doc-viewer",
        ]}
      />
      <Project
        period="2024.09.28 ~ Now"
        title="Fitrace App Service"
        content={
          <span>
            운동 도움 IoT 서비스, Fitrace <br />앱 성능 개선, 운동 데이터 시각화
            및 알고리즘 개발, UI/UX 개발, 영문 버전 개발
          </span>
        }
        company
        githubURL="https://www.fitrace.co.kr/ko/"
        notionURL="https://officialkyus.notion.site/Fitrace-Service-Dev-Log-18b48a0856d48026af2beb4dc3ec6450?pvs=4"
        techStack={[
          "React-Native",
          "Recoil",
          "RN-async-storage",
          "RN-ble-manager",
          "Python 데이터 시각화",
        ]}
      />
      <Project
        period="During Internship, 2023.09.08 ~ 2023.11.10, 2023.12.04 ~ 2023.12.20"
        title="Grid Library Devment"
        content="타사 Grid Library 사용으로 인한 고정 지출 해소와 기능 및 디자인 개선을 위한 다기능 Grid library 개발"
        company
        githubURL="https://www.bizpeer.co.kr/main/main.php"
        notionURL="https://officialkyus.notion.site/Grid-Project-69e19185b25e47c9be9c6288495f5f08?pvs=4"
        techStack={[
          "Redux",
          "React",
          "React Context",
          "react-hook-form",
          "TypeScripts",
          "JavaScript",
        ]}
      />
      <Title1>Service Dev Log</Title1>
      <RowBar width="100%" />
      <Project
        period="2024.05.13 ~ Now"
        title="CAUSW Service V2"
        content={
          <span>
            중앙대학교 소프트웨어학과 학생이 학교 생활에 도움을 받을 수 있는
            서비스를 제공하는 동문 네트워크 서비스, CAUSW
            <br />
            Front-end 팀장, Next.js 적용 및 SSR 환경 구성, Design & Flow 개선
          </span>
        }
        githubURL="https://github.com/CAUCSE/CAUSW_frontend_V2"
        notionURL="https://www.notion.so/officialkyus/CAUSW-V2-5be14925742048dcb37d880f2a9b1cbd?pvs=4"
        techStack={[
          "Next.js",
          "FSD Architecture",
          "Zustand",
          "React Query",
          "Axios",
          "PWA",
          "Tailwind",
        ]}
      />
      <Project
        period="2023.12.23 ~ 2023.08.21"
        title="CAUSW Service V1"
        content={
          <span>
            중앙대학교 소프트웨어학과 학생이 학교 생활에 도움을 받을 수 있는
            서비스를 제공하는 동문 네트워크 서비스, CAUSW
            <br />
            Front-end CI/CD 구축, 유저 QA 주도 및 유지보수, 각종 권한 별 기능
            구현
          </span>
        }
        githubURL="https://github.com/CAUCSE/CAUSW_frontend"
        notionURL="https://www.notion.so/officialkyus/93bf29c840d648368181851d2fae3797"
        techStack={[
          "MobX",
          "React Router",
          "Axios",
          "react-hook-form",
          "Playwright",
          "Emotion",
          "MSW",
          "Vite",
        ]}
      />

      <Title1>Project Dev Log</Title1>
      <RowBar width="100%" />
      <Project
        period="During Capstone, 2024.02.13 ~ 24.06.21"
        title="Dyslexia Zoo Project"
        content={
          <span>
            난독증 소아 치료 웹 게임 서비스, Dyslexia Zoo
            <br /> 웹 Front-end 개발, Gamification 요소 기획 및 구현, 음성
            데이터 처리 및 모델 활용
          </span>
        }
        githubURL="https://github.com/Capstone-team02-Dyslexia-Cure-Service/Dyslexia_Zoo_FE"
        notionURL="https://officialkyus.notion.site/Dyslexia-Zoo-Project-68e0f0aadb614bd192e501bc77575dad?pvs=4"
        techStack={[
          "FSD",
          "Zustand",
          "Axios",
          "React Router",
          "react-hook-form",
          "Emotion",
          "Recharts",
          "MSW",
          "Vite",
        ]}
      />
      <Project
        period="During KB Future Finance A.I. Challenge, 2024.07.24 ~ 24.08.27"
        title="KB-HI"
        content={
          <span>
            민감한 개인 데이터를 안전하게 처리하고 보호함과 동시에 <br />
            기업에서 데이터를 Training 및 Inference에 활용할 수 있도록 지원하는
            AI 보안 인프라, KB-HI
          </span>
        }
        githubURL="https://github.com/KB-HI-Service/KB-HI-Service-FE"
        notionURL="https://officialkyus.notion.site/KB-HI-089f2695badb496cbc383fb23e650e8a?pvs=4"
        techStack={[
          "FSD",
          "Web Socket",
          "Snowflake",
          "Zustand",
          "Axios",
          "React Router",
          "Emotion",
          "Vite",
        ]}
      />
      <Project
        period="2024.07.01 ~ 2024.12.31"
        title="Prototyne Project"
        content={
          <span>
            기업과 소비자를 잇는 시제품 소비자 반응 테스트 서비스, Prototyne{" "}
            <br /> Front-end 팀장
          </span>
        }
        githubURL="https://github.com/PROTOTYNE"
        notionURL="https://www.notion.so/Prototyne-110239e193bd80a78de0f8d2b11bf30c"
        techStack={[
          "FSD",
          "Zustand",
          "Axios",
          "React Router",
          "react-hook-form",
          "Emotion",
          "Vite",
        ]}
      />
      <Project
        period="2024.09.01 ~ 2024.11.30"
        title="YagSa Project"
        content={
          <span>
            모바일 앱 개발 과목 팀 프로젝트: 약물 관리 앱, 약사 개발
            <br />
            알림, 사진 촬영 및 관리 구현
          </span>
        }
        githubURL="https://github.com/YagSa/YagSa-FE"
        notionURL="https://officialkyus.notion.site/YagSa-Log-14b48a0856d480f49525ff002395018a?pvs=4"
        techStack={["Flutter", "Dart", "Firebase", "Firestore DB"]}
      />
      <Project
        period="2024.09.01 ~ 2024.11.30"
        title="Sensor-Based-Positioning-App Project"
        content={
          <span>
            융합 IoT 프로젝트 과목 팀 프로젝트: 모바일 센서 기반 데이터 수집 &
            위치 추정 앱 개발
            <br />
            모바일 블루투스, 와이파이, IMU 센서 활용
          </span>
        }
        githubURL="https://github.com/selfishAltruism/Sensor-Based-Positioning-App"
        notionURL="none"
        techStack={[
          "React Native",
          "RN-async-storage",
          "RN-ble-manager",
          "RN-wifi-reborn",
          "RN-sensors",
        ]}
      />
      <Project
        period="2024.05.28 ~ 2024.06.01"
        title="CITS Project"
        content="프로젝트 이슈 추적 시스템 웹 서비스, 웹 Front-end 개발"
        githubURL="https://github.com/CAU-SE-ITS/SE_ITS_Front-End"
        notionURL="https://officialkyus.notion.site/CITS-Project-c2a3213faae44ad490282cf871a02861?pvs=4"
        techStack={[
          "FSD",
          "Zustand",
          "Axios",
          "React Router",
          "react-hook-form",
          "Emotion",
          "Vite",
        ]}
      />
      <Project
        period="2024.02.25 ~ 2024.06.12"
        title="Convo Persona Project"
        content={
          <span>
            Chat GPT와 성격 분석 모델을 활용한 사적 대화 서비스, Convo Persona{" "}
            <br />웹 Front-end 개발
          </span>
        }
        githubURL="https://github.com/2024-1-Open-source-Project-team11/Convo_Persona_FE"
        notionURL="https://officialkyus.notion.site/Convo-Persona-Project-7d91b4ce9be54f1db0446424f073d351?pvs=4"
        techStack={[
          "GPT Prompting",
          "Zustand",
          "Axios",
          "React Router",
          "react-hook-form",
          "Emotion",
          "Vite",
        ]}
      />
      <Project
        period="During OS Subject, 2024.04.28 ~ 2024.05.05"
        title="Logistics Center Simulator System"
        content="PintOS 환경에서 Multi Thread 구조를 구성하고, 이를 바탕으로 자동화 물류 센터 시뮬레이터 개발"
        githubURL="https://github.com/selfishAltruism/2024_OS_Assignment"
        notionURL="https://officialkyus.notion.site/2024-OS-1st-Assignment-Report-79b42cdeb81d48da89cccef575f04b83?pvs=4"
        isSub={true}
        techStack={["Ubuntu", "C", "PintOS"]}
      />

      <Project
        period="2021.06.23 ~ 2021.12.20"
        title="IT_DA Project"
        content="대학생 카페 공부를 돕는 카페 빈자리 공유 웹 서비스 개발"
        githubURL="https://github.com/selfishAltruism/IT_DA_web_front"
        notionURL="https://officialkyus.notion.site/IT_DA-0977623d68144f3fbb70cd32f5fa7977?pvs=4"
        isSub={true}
        techStack={["JavaScript", "OpenCV", "Apps Script"]}
      />
      {seeMore ? (
        <>
          <div style={{ height: "15px" }}></div>
          <Project
            period="2023.11.25 ~ Now"
            title="Portfolio"
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
            period="During Internship, 2023.11.21 ~ 2023.11.29"
            title="Severless Social Login Devment"
            content="NextAuth.js를 활용하여 Kakao, Google, Naver 계정으로 로그인 가능한 Serverless Social Login System 구현"
            githubURL="none"
            notionURL="https://officialkyus.notion.site/Sever-Less-Social-Login-458b881bf2984563ac951bb4f9d7e9ba?pvs=4"
            isSub={true}
            techStack={["Next.js", "Redux", "React", "TypeScripts"]}
          />
          <Project
            period="During Army, 2023.02.21 ~ 2023.02.25"
            title="ShipList Devment"
            content="군대 내부에서 사용되는 선박일지 프로그램 개발"
            githubURL="https://github.com/selfishAltruism/ShipList"
            notionURL="https://www.notion.so/officialkyus/ShipList-4fc012ceae984959a73ca235dc42d444"
            isSub={true}
            techStack={["JavaScript"]}
          />
          <Project
            period="During Hackathon, 2023.11.12 ~ 2023.11.13"
            title="Talent Save Service Devment"
            content="대학생 사회적 안전망 구축을 위한 학비 투자 Platform Prototype Front-end 개발"
            githubURL="https://github.com/UniD3-Hackathon-Team2/TalentStock-fe"
            notionURL="https://www.notion.so/officialkyus/Talent-Save-bba1f23dbd2c4d0989d7f91f94a1b02a"
            isSub={true}
            techStack={["React", "Axios", "React Context"]}
          />
        </>
      ) : null}
      <SeeMoreButton
        onClick={() => {
          setSeeMore(!seeMore);
        }}
      >
        {seeMore ? "See simply" : "See more"}
      </SeeMoreButton>

      <Title1>Study Log</Title1>
      <RowBar width="100%" />
      <Project
        period="2024.07.20 ~ 2024.10.31"
        title="LAN & IP Study"
        content="무선/유선 LAN, IP 통신 심층 공부"
        githubURL="none"
        notionURL="https://officialkyus.notion.site/LAN-IP-15048a0856d480789301e441bacb7347?pvs=4"
        isStudy={true}
        techStack={[]}
      />
      <Project
        period="2024.07.20 ~ 2024.10.31"
        title="Computing Network Basic Study"
        content="컴퓨터 통신 기초 공부"
        githubURL="none"
        notionURL="https://officialkyus.notion.site/160a64b1036043c4b4c8229e4b1f0fc6?pvs=4"
        isStudy={true}
        techStack={[]}
      />
      <Project
        period="2024.07.20 ~ 2024.12.10"
        title="HCI Study"
        content="Human computer interaction 심층 공부"
        githubURL="none"
        notionURL="https://officialkyus.notion.site/HCI-11b48a0856d480aea887d67158454cbd?pvs=4"
        isStudy={true}
        techStack={[]}
      />
      <Project
        period="2024.07.20 ~ 2024.10.31"
        title="AI Study"
        content="인공지능 심층 공부"
        githubURL="none"
        notionURL="https://officialkyus.notion.site/8184dd166d654c47b7ebad39231e235c?pvs=4"
        isStudy={true}
        techStack={["Python", "Supervised", "Unsupervised"]}
      />
      <Project
        period="2024.04.20 ~ 2024.04.24"
        title="LLM Study"
        content="LLM 심층 공부"
        githubURL="none"
        notionURL="https://officialkyus.notion.site/GPT-Practice-ddef649016a6425194b4641fac9fd3e5?pvs=4"
        isStudy={true}
        techStack={["Chat GPT", "Prompt", "NLP", "ML"]}
      />

      {seeMoreStudy ? (
        <>
          <div style={{ height: "15px" }}></div>
          <Project
            period="2024.04.02 ~ Now"
            title="Algorithm Study"
            content="Sort, Dynamic Programming 등 알고리즘 공부 및 코딩 테스트 준비"
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
        </>
      ) : null}
      <SeeMoreButton
        onClick={() => {
          setSeeMoreStudy(!seeMoreStudy);
        }}
      >
        {seeMoreStudy ? "See simply" : "See more"}
      </SeeMoreButton>
      <div style={{ height: "40px" }}></div>
    </Container>
  );
};

const SeeMoreButton = styled.div`
  &:hover {
    font-weight: bold;
    color: #000000;
  }

  color: #494949;
  width: 100%;
  text-align: right;
  font-size: 20px;
`;
