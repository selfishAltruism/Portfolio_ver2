import Avatar from "@mui/material/Avatar";
import styled from "@emotion/styled";

import "./Profile.css";

import RowBar from "./style_component/RowBar";

function Profile() {
  return (
    <>
      <div className="profile-contianer">
        <span className="name">강민규</span>
        <span className="role">
          Front-End Developer / officialkyus@gmail.com
        </span>
        <RowBar width="85%" />
        <span className="main-content">안전지대를 벗어나는 개발자</span>
        <span className="sub-content">
          변화와 문제를 두려워 하지 않고 계속해서 성장하는 개발자, 강민규입니다.
        </span>
        <span className="sub-content">
          즐겁게 코딩하는 자세와, 의사소통할 수 있는 능력이 개발의 본질이라고
          생각합니다.
        </span>
        <span className="stack-label"></span>
        <div className="stacks">
          <div className="stack">Java Script</div>
          <div className="stack">React</div>
          <div className="stack">Redux</div>
          <div className="stack">Next</div>
        </div>
      </div>
      <Avatar
        className="profile-img"
        alt="Kang Min Kyu"
        src="img/profile.jpg"
        sx={{ width: 100, height: 100 }}
      />
    </>
  );
}

export default Profile;
