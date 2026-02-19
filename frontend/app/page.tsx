"use client";

import Loader from "./components/ui/Loader";
import MonthView from "./components/views/Month";
import WeekView from "./components/views/Week";

export default function Home() {
  
  return (
   <div>
      {/* <MonthView/> */}
      <WeekView/>
   </div>
  );
}
