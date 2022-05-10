import React from "react";
import study2pic from "../public/team/study2.jpg"
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
          src={study2pic}
          alt="Moeprofile-pictures"
          width="400%"
          height="400%"
        />
        <h1>CSC 415 Class</h1>
        <p class="title"> Filesystem </p>
        <Button href="">
          Join study group
        </Button>
      </div>
    </div>
  );
}
