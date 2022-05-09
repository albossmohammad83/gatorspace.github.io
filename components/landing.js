import { Button } from "antd";
import React from "react";

function LoginLogout({ props }) {
  if (!props.sStorage && !props.lStorage) {
    return (
      <div id="base" className={"flex-box"}>
        <div id ="buttons-container">
        
      <div id="button-left">
      
        <Button size={"small"} href="/login">
          Sign in
        </Button>
        {/* <br /> */}
      </div>
      <div id="button-right">
        <Button size={"small"} href="/registration">
          Sign up
        </Button>
        {/* <br /> */}
      </div>
      
    </div>
    </div>
    );
  }
}

export default function Landing({ isLoggedIn }) {
  return (
    <div id="base">
    <div id="Title">Gator space</div>
    <LoginLogout props={isLoggedIn} />
    </div>
  );
}