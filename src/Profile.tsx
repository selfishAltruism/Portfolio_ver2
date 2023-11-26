import Avatar from "@mui/material/Avatar";

function Profile() {
  return (
    <>
      <div className="profile-contianer">
        <span className="name">강민규</span>
        <span className="role">Front-End Developer</span>
        <span className="email">officialkyus@gmail.com</span>
        <span className="main-content">안전지대를 벗어나는 개발자</span>
        <span className="sub-content">
          변화와 문제를 두려워 하지 않고 계속해서 성장하고 개발자, 강민규입니다.
        </span>
        <span className="stack-label"></span>
        <div className="stacks">
          <div className="stack">JavaScript</div>
        </div>
      </div>
      <Avatar alt="Kang Min Kyu" src="img/profile.jpg" />
    </>
  );
}

export default Profile;
