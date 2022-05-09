import Link from "next/link";
import React, {useEffect} from "react";
import { Button } from "antd";
import PageHeader from "../components/header";
import PageFooter from "../components/footer";
import Landing from "../components/landing";
import HomePage from "../components/homePage";

export default function study(){
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