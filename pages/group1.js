import React from "react";
import study1pic from "../public/team/study1.jpg"
import Image from "next/image";
import { Button } from "antd";


export default function Registration() {
  const [sStorage, setSStorage] = React.useState(null);
  const [lStorage, setLStorage] = React.useState(null);
  React.useEffect(() => {
    if (!sessionStorage.getItem('user') && localStorage.getItem('user')) {
      sessionStorage.setItem('user', localStorage.getItem('user'));
    }
    setSStorage(sessionStorage.getItem('user'));
    setLStorage(localStorage.getItem('user'));
  }, [sStorage, lStorage]);

  return (
    <div>
      <div class="card">
        <Image
          src={study1pic}
          alt="Moeprofile-pictures"
          width="400%"
          height="400%"
        />
        <h1>CSC 600 Class</h1>
        <p class="title">Homeork2 help!!! </p>
        <Button href="">
          Join study group
        </Button>
      </div>
    </div>
  );
}
