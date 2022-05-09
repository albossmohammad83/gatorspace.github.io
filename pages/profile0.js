import React from "react";
import user1pic from "../public/team/gator.jpg"
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
      <PageHeader isLoggedIn={{sStorage: sStorage, lStorage: lStorage}} />
      <HomePage   isLoggedIn={{sStorage: sStorage, lStorage: lStorage}} /> 
      <Landing    isLoggedIn={{sStorage: sStorage, lStorage: lStorage}} />
      
        <div>
        <div class="card">
             <Image
                  src={user1pic}
                  alt="Moeprofile-pictures"
                  width="400%"
                  height="400%"
                />
                <h1>User1</h1>
                <p class="title">I'm a student At SFSU. </p>
                <p> University</p>
                </div>
                <div class="buttons-container-profile">
                <div id="buttons">
                    <div id="button-changePassword">
                    <Button size={"large"} href="">
                    Change Password
                    </Button>
                    <br />
                </div>
                <div id="button-ChangeEmail">
                    <Button size={"large"} href="">
                        Change Email
                    </Button>
                    <br />
                </div>
                </div>
        </div>
        </div>
        </div>
    );
}
