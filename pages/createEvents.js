import React from "react";
import PageHeader from "../components/header";
import Landing from "../components/landing";
import HomePage from "../components/homePage";
import CreateEventForm from "./createEventForm";

export default function CreateEvents(){
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
<div class="friend list">
  <div id="button-friend1">
    
 <CreateEventForm />

  </div>
</div>
</div>
</div>
);
}