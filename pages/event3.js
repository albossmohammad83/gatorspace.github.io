import React from "react";
import event3pic from "../public/team/event3.jpg"
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
                  src={event3pic}
                  alt="Moeprofile-pictures"
                  width="400%"
                  height="400%"
                />
                <h1>No Scrubs: SF's Best '90s Hip Hop and R&B Night</h1>
                <p class="title">After 14 months, one of SF's most popular weekly dance parties is finally back!
                We're taking over San Francisco's Neck of the Woods, which is reopening for the first time since 
                    early 2020 and has just been</p>
                    <Button href="">
                    Add to Events list
                    </Button>
                </div>  
                </div> 
    );
}
