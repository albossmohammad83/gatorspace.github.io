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
              <Link href="/profile0" title="Profile" />
            </Anchor>
          </div>
        </>
    );
  }

  return (
      <div>
          <Anchor>
            <Link href="/login" title="Login" />
          </Anchor>
      </div>
  );
}

export default function PageHeader({ isLoggedIn }) {
  return (
      <Header style={{ backgroundColor: "#f0f2f5" }}>
        <div className="header">
          <Anchor targetOffset="65">
            <div id="logo">
              <Anchor>
                <Link href="/" title="Gator Space" />
              </Anchor>
            </div>
            <div>
              <Anchor>
                <Link href="/members" title="About Us" />
              </Anchor>
            </div>
            <LoginLogout props={isLoggedIn} />
          </Anchor>
        </div>
      </Header>
  );
}
