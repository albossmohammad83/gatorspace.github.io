import React from "react";
import study4pic from "../public/team/study4.jpg"
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
          src={study4pic}
          alt="Moeprofile-pictures"
          width="400%"
          height="400%"
        />
        <h1>CSC 665 Class</h1>
        <p class="title">pacman reinforcement </p>
        <Button href="">
          Join study group
        </Button>
      </div>
    </div>
  );
}
