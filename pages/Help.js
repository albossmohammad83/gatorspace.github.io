import Link from "next/link";
import React, {useEffect} from "react";
import { Carousel } from "antd";
import PageHeader from "../components/header";
import PageFooter from "../components/footer";
import Landing from "../components/landing";
import HomePage from "../components/homePage";
import Image from "next/image";
const bios = [
  {
    key: "mohammad",
    memberName: "Mohammad Abdelrahman",
    memberBio:
      "Project leader",
      contactinfo: "mohammad333@gmail.com"
    },
  {
    key: "kimberly",
    memberName: "Kimberly Elgar",
    memberBio:
     "Front-end",
      contactinfo: "kimberly4002@gmail.com",
    },
  {

    key: "SJ",
    memberName: "SJ KIM",
    memberBio:
    "Back-end + github master",
      contactinfo: "sjk40@gmail.com",
  },
  {
    key: "daisy",
    memberName: "Daisy Rodriguez",
    memberBio:
      "Back-end + scrum master",
      contactinfo: "daisy43@gmail.com",
    },
  {
    key: "chi",
    memberName: "Chi Tran",
    memberBio:
      "I'm a Computer Science undergraduate student at SFSU." +
      "This is my favorite time of the year: the end of the school year.",
    contactinfo: "ttranpham@mail.sfsu.edu",
  }

];


export default function Help(){
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
<>
      
    <div id="members">
      <Carousel autoplay autoplaySpeed={8000} style={{ display: "block" }}>
        {bios.map((bios) => {
          return (
            <div id="carousel-container" key={bios.key}>
              
              <h1> Name:   {bios.memberName}</h1>
              <h3>
                <Image
                  src={`/team/${bios.key}.jpg`}
                  alt="member-pictures"
                  width="400%"
                  height="400%"
                />
              </h3>
              <p>{bios.memberBio}</p>

              <h2 style={{fontWeight: "bold",}}>Contact info:</h2>
              <h1>{bios.contactinfo}</h1>
            </div>
          );
        })}
      </Carousel>
    </div>
    </>

    </div>
</div>);
}