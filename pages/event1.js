import React from "react";
import moepic from "../public/team/mohammad.jpg"
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
  
return(
    <div>
        <div class="card">
             <Image
                  src={moepic}
                  alt="Moeprofile-pictures"
                  width="400%"
                  height="400%"
                />
                <h1>Mohammad</h1>
                <p class="title">I'm a computer science undergraduate student At SFSU. </p>
                <p> University</p>
                </div>
                <div class="buttons-container-profile">
                <div id="buttons">
                    <div id="button-changePassword">
                    <Button size={"large"} href="">
                    Add to Friends list
                    </Button>
                    <br />
                </div>
                </div>
        </div>
      </div>
    );
}
