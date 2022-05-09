import { Button } from "antd";
import React from "react";

function LoginLogout({ props }) {
    if (props.sStorage || props.lStorage) {
        return (
            <div id="buttons">
                <div id="button-friend">
                    <Button size={"large"} href="/addFriends">
                        Friends
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
                    <Button size={"large"} href="/CreateEvents">
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
                <div id="button-change-profile">
                    <Button size={"large"} href="/profile">
                        Change Profile
                    </Button>
                    <br />
                </div>
                <div id="button-help">
                    <Button size={"large"} href="/help">
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