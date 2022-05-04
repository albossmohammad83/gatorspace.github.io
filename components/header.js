import React from "react";
import { Anchor, Layout} from "antd";

const { Link } = Anchor;
const { Header } = Layout;

function loggingOut() {
  if (localStorage.getItem('user')) {
    localStorage.removeItem('user');
  }
  sessionStorage.removeItem('user');
}

function LoginLogout({ props }) {
  if (props.sStorage || props.lStorage) {
    return (
      <>
      <div>
      <Anchor onClick={loggingOut}>
        <Link href='/' title="Logout" />
      </Anchor>
      </div>
      <div>
         <Anchor >
      <Link href="/profile" title="profile" />
      </Anchor>
      </div>
      </>
    );
  }

  return <Link href="/login" title="Login" />;
}

export default function PageHeader({ isLoggedIn }) {
  return (
    <Header style={{ backgroundColor: "violet" }}>
      <div className="header">
        <Anchor targetOffset="65">
          <div id="logo">
            <Link href="/" title="Gator Space" />
          </div>
          <Link href="/members" title="About Us" />
          <LoginLogout props={isLoggedIn} />
        </Anchor>
      </div>
    </Header>
  );
}
