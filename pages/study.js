import Link from "next/link";
import React, {useEffect} from "react";
import { Button } from "antd";
import PageHeader from "../components/header";
import Landing from "../components/landing";
import HomePage from "../components/homePage";
import Group1 from "../pages/group1"
import Group2 from "../pages/group2"
import Group3 from "../pages/group3"
import Group4 from "../pages/group4"

export default function Events(){
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

        <Group1/>
        <Group2/>
        <Group3/>
        <Group4/>


        <div class="topnav">
  <div class="search-container">
    <form action="/action_page.php">
      <input type="text" placeholder="Search.." name="search"></input>
      <button style={{fontWeight: "bold",}} type="submit">Search</button>
    </form>
  </div>
</div>

<div class= "Study-container">
    <div class = "myStudy" style={{ width: "500px",height: "200px"}}>
        <h1>My Study </h1>
        <div id="button-study1">
                    <Link id="study1" size={"small"} href="/">
                    csc642
                    </Link>
                    <br />
                </div>
                <div id="button-study2">
                    <Link id="study1" size={"small"} href="/">
                    csc415
                    </Link>
                    <br />
                </div>
    </div>
    <div class = "create-group" style={{ width: "500px",height: "200px"}}>
    <div id="button-create-group">
                    <Button size={"large"} href="/">
                    create group
                    </Button>
                    <br />
                </div>
    </div>
</div>
</div>
</div>
);
}