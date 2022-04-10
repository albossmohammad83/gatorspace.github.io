import { Button } from "antd";
export default function Landing() {
  return (
    <div id="base">
      <div id="Title">Gator space</div>
      <div id="button-left">
        <Button size={"large"} href="/login">
          Log in
        </Button>
        <br/>
      </div>
      <div id="button-right">
        <Button size={"large"} href="/registration">
          Sign up
        </Button>
        <br/>
      </div>
    </div>
  );
}