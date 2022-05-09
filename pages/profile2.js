import React from "react";
import daisypic from "../public/team/daisy.JPG"
import Image from "next/image";
import { Button } from "antd";
import PageHeader from "../components/header";
import Landing from "../components/landing";
import HomePage from "../components/homePage";

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
      {/* <PageHeader isLoggedIn={{sStorage: sStorage, lStorage: lStorage}} />
      <HomePage   isLoggedIn={{sStorage: sStorage, lStorage: lStorage}} /> 
      <Landing    isLoggedIn={{sStorage: sStorage, lStorage: lStorage}} /> */}
        <div>
        <div class="card">
             <Image
                  src={daisypic}
                  alt="Moeprofile-pictures"
                  width="400%"
                  height="400%"
                />
                <h1>Daisy</h1>
                <p class="title">I'm a computer science undergraduate student At SFSU. </p>
                <p> University</p>
                <Button href="">
                    Add to Friends list
                    </Button>
                </div>
        <br /><br /><br />
        <br /><br /><br />
        </div>
        </div>
    );
}
