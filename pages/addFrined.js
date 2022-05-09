import Link from "next/link";
import React, {useEffect} from "react";

import PageHeader from "../components/header";
import PageFooter from "../components/footer";
import Landing from "../components/landing";
import HomePage from "../components/homePage";

export default function addfrined(){
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
      <button type="submit">submit</button>
    </form>
  </div>
</div>


    </div>
</div>


);
}


export const getStaticProps = async () =>{
  const res = await fetch(`gttps://jsonplaceholder.typicode.com/posts?_limit=6`)
  const articles = await res.json()
  return {
    props:{ articles}
   
  }
}