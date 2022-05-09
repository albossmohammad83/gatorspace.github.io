import React from "react";
import event2pic from "../public/team/event2.jpg"
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
  
return(
    <div>
        <div class="card">
             <Image
                  src={event2pic}
                  alt="Moeprofile-pictures"
                  width="400%"
                  height="400%"
                />
                <h1>ProductCon is the largest product management conference series in the world.</h1>
                <p class="title">Ticket sale for the virtual access is now closed. Join the event 
                via: https://prdct.school/3KSQOb7 </p>
                <Button href="">
                    Add to Events list
                    </Button>
                </div>
                </div>
    );
}
