import { Button } from "antd";
import React from "react";
import Link from "next/link";

function LoginLogout({ props }) {
    if (props.sStorage || props.lStorage) {
        return (
            <div id="buttons">
                <div id="button-friend">
                    <Button size={"large"}  href="/addFriends">
                    Friend suggestion
                    </Button>
                    <br />
                </div>
                <div id="button-event">
                    <Button size={"large"} href="/Events">
                        Events
                    </Button>
                    <br />
                </div>
                <div id="button-create-event">
                    <Button size={"large"} href="/createEvents">
                        Create Events
                    </Button>
                    <br />
                </div>
                <div id="button-study">
                    <Button size={"large"} href="/study">
                        Study
                    </Button>
                    <br />
                </div>
                <div id="button-help">
                    <Button size={"large"} href="/Help">
                        Help
                    </Button>
                    <br />
                </div>
            </div>
        );
    }
}
export default function homePage({ isLoggedIn }) {
    return (
        <div>
            <div class="buttons-container">
                <div id="buttons">
                    <div id="button-friend">
                        <LoginLogout props={isLoggedIn} />
                        <br />
                    </div>
                    <div id="button-event">

                        <br />
                    </div>
                    <div id="button-create-event">

                        <br />
                    </div>
                    <div id="button-study">

                        <br />
                    </div>
                    <div id="button-change-profile">

                        <br />
                    </div>
                    <div id="button-help">

                        <br />
                    </div>
                </div>
            </div>
            <div class="content-container">

            </div>
        </div>
    );
}