import { Button } from "antd";
import React from "react";
import { Anchor, Layout } from "antd";

function loggingOut() {
    if (localStorage.getItem('user')) {
        localStorage.removeItem('user');
    }
    sessionStorage.removeItem('user');
}

function LoginLogout({ props }) {
    if (props.sStorage || props.lStorage) {
        return (
            <div id="buttons">
                <div id="button-friend">
                    <Button size={"large"} href="/">
                        Friends
                    </Button>
                    <br />
                </div>
                <div id="button-event">
                    <Button size={"large"} href="/">
                        Events
                    </Button>
                    <br />
                </div>
                <div id="button-create-event">
                    <Button size={"large"} href="/">
                        Create Events
                    </Button>
                    <br />
                </div>
                <div id="button-study">
                    <Button size={"large"} href="/">
                        Study
                    </Button>
                    <br />
                </div>
                <div id="button-change-profile">
                    <Button size={"large"} href="/">
                        Change Profile
                    </Button>
                    <br />
                </div>
                <div id="button-help">
                    <Button size={"large"} href="/">
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
    );
}