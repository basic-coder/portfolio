import React from "react";
import { Timeline } from "./ui/TimeLine";
import { experienceData } from "../data";

export function Experience() {


  return (
    <div id="experience" className="relative w-full overflow-clip">
      <Timeline data={experienceData} />
    </div>
  );
}
