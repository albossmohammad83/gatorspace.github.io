import React from "react";
import event1pic from "../public/team/event1.jpg"
import Image from "next/image";
import { Button } from "antd";


export default function Registration() {
  const [sStorage, setSStorage] = React.useState(null);
  const [lStorage, setLStorage] = React.useState(null);
  React.useEffect(() => {
    if (!sessionStorage.getItem('user') && localStorage.getItem('user')) {
      sessionStorage.setItem('user', localStorage.getItem('user'));
    }
    setSStorage(sessionStorage.getItem('user'));
    setLStorage(localStorage.getItem('user'));
  }, [sStorage, lStorage]);

  return (
    <div>
      <div class="card">
        <Image
          src={event1pic}
          alt="Moeprofile-pictures"
          width="400%"
          height="400%"
        />
        <h1>FoodieLand is a foodie-inspired three-day event where family and friends gather together for
          food and drink, shopping, and entertainment.</h1>
        <p class="title">NOTE: Tickets will only be available online through Eventbrite.
          No tickets will be sold at the door. Please purchase your tickets in advance.
          Children under 5 are admitted for free. </p>
        <Button href="">
          Add to Events list
        </Button>
      </div>
    </div>
  );
}
