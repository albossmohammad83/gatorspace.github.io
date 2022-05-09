import React from "react";
import moepic from "../public/team/mohammad.jpg"
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
                <h1>Mohammad Abdelrahman</h1>
                <p class="title">I'm a computer science undergraduate student passionate about software development. </p>
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
        <br /><br /><br />
        <br /><br /><br />
        <br /><br /><br />
        <br /><br /><br />
        <br /><br /><br />
        <PageFooter />
        </div>
    );
}
