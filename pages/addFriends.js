import Link from "next/link";
import React, {useEffect} from "react";
import { Button } from "antd";
import PageHeader from "../components/header";
import PageFooter from "../components/footer";
import Landing from "../components/landing";
import HomePage from "../components/homePage";

export default function addFriends(){
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
      

        <div id="addFreind-content">
      

<div class="topnav">
  <div class="search-container">
    <form action="/action_page.php">
      <input type="text" placeholder="Search.." name="search"></input>
      <button type="submit">Submit</button>
    </form>
  </div>
</div>
<div class = "friend list">
<div id="button-friend1">
                    <Button size={"large"} href="/profile">
                    friend1
                    </Button>
                    <br />
                </div>
                <div id="button-friend2">
                    <Button size={"large"} href="/profile">
                    friend2
                    </Button>
                    <br />
                </div>
                <div id="button-friend3">
                    <Button size={"large"} href="/profile">
                    friend3
                    </Button>
                    <br />
                </div>
              <div id = "right side button" style={{marginLeft: "800px" ,marginTop:"-180px"}}> 
                <div id="button-friend request" >
                    <Button size={"large"} href="/">
                    friend request
                    </Button>
                    <br />
                </div>
                <div id="button-friend may you know" >
                    <Button size={"large"} href="/">
                    you may know
                    </Button>
                    <br />
                </div>
            </div>
                
</div>


    </div>
</div>


);
}