import React from "react";
import moepic from "../public/team/kimberly.jpg"
import Image from "next/image";
import { Button } from "antd";
import PageHeader from "../components/header";
import PageFooter from "../components/footer";

export default function Registration() {
    return (
        <div>
        <PageHeader isLoggedIn={{sStorage: null, lStorage: null}} />
        <div class="card">
             <Image
                  src={moepic}
                  alt="Moeprofile-pictures"
                  width="400%"
                  height="400%"
                />
                <h1>Name:  kimberly</h1>
                <h1>Major: Computer engineering</h1> 
                <p class="title">Hi! I'm kimberly, I am currently majoring in computer engineering. </p>
                </div>
                <div class="buttons-container-profile">
                <div id="buttons">
                    <div id="button-changePassword">
                    <Button size={"large"} href="/addFriends">
                    Go back
                    </Button>
                    <br />
                </div>
                </div>
        </div>
        <br /><br /><br />
        <br /><br /><br />
        <br /><br /><br />
        <br /><br /><br />
        <br /><br /><br />
        </div>
    );
}