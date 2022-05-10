import React from "react";
import Image from "next/image";
import { Carousel } from "antd";
import PageHeader from "../components/header";

const bios = [
  {
    key: "mohammad",
    memberName: "Mohammad Abdelrahman",
    memberBio:
      "I'm a computer science undergraduate student passionate about software development. " +
      "Currently seeking an internship opportunity to further develop my skills and add value to the team.",
  },
  {
    key: "kimberly",
    memberName: "Kimberly Elgar",
    memberBio:
      "I'm a computer engineering undergraduate student. " +
      "Currently seeking an internship opportunity to further develop my skills and add value to the team.",
  },
  {

    key: "SJ",
    memberName: "SJ KIM",
    memberBio:
      "I'm majoing in computer science at SFSU and " +
      "this is my first time to work with others.",

    key: "daisy",
    memberName: "Daisy Rodriguez",
    memberBio:
      "I'm a computer engineering undergraduate student." +
      "I will be graduating this spring 22' and excited to pursue a career within my field.",

    key: "chi",
    memberName: "Chi Tran",
    memberBio:
      "I'm a Computer Science undergraduate student at SFSU." +
      "This is my favorite time of the year: the end of the school year.",

  },

];

export default function MembersPage() {
  return (
    <>
      <PageHeader isLoggedIn={{sStorage: null, lStorage: null}} />
    <div id="members">
      <div id="Title">Meet the Team!</div>
      <Carousel autoplay autoplaySpeed={8000} style={{ display: "block" }}>
        {bios.map((bios) => {
          return (
            <div id="carousel-container" key={bios.key}>
              <h1>{bios.memberName}</h1>
              <h3>
                <Image
                  src={`/team/${bios.key}.jpg`}
                  alt="member-pictures"
                  width="400%"
                  height="400%"
                />
              </h3>
              <p>{bios.memberBio}</p>
            </div>
          );
        })}
      </Carousel>
    </div>
    </>
  );
}
