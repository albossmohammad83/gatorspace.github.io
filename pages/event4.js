import React from "react";
import event4pic from "../public/team/event4.jpg"
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
                  src={event4pic}
                  alt="Moeprofile-pictures"
                  width="400%"
                  height="400%"
                />
                <h1>Tech Career Fair: Exclusive Tech Hiring Event</h1>
                <p class="title">"With COVID-19 now a global pandemic, the first thing on our minds 
                is your safety! We are hosting ALL of our career fairs virtually until the public health 
                officials and our own executive team determines it's safe enough to resume them in person. 
                Here is a quick rundown:</p>
                    <Button href="">
                    Add to Events list
                    </Button>
                </div>  
        </div>
    );
}
