
import React from "react";
import Startup_Page from "../Startups/Startup_Page";
import Startup_Page_Section2 from "../Startups/Startup_Page_Section2";
import Startup_Page_Section3 from "../Startups/Startup_Page_Section3";


function startup_Page() {
  return (
    <div className="w-full">
      <Startup_Page/>
      <Startup_Page_Section2/>
      <Startup_Page_Section3/>
    </div>
  );
}



export default startup_Page;
