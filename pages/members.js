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
      "I'm a computer science undergraduate student passionate about software development. " +
      "Currently seeking an internship opportunity to further develop my skills and add value to the team.",
  },

];

export default function MembersPage() {
  return (
    <>
      <PageHeader isLoggedIn={{sStorage: null, lStorage: null}} />
    <div id="members">
      <div id="Title">Meet the Team!</div>
      <Carousel autoplay autoplaySpeed={10000} style={{ display: "block" }}>
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
