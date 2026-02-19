"use client";

import Loader from "./components/ui/Loader";
import DayView from "./components/views/Day";
import MonthView from "./components/views/Month";
import WeekView from "./components/views/Week";
import YearView from "./components/views/Year";

export default function Home() {
  
  return (
   <div>
      {/* <MonthView/> */}
      {/* <WeekView/> */}
      {/* <YearView/> */}
      <DayView/>
   </div>
  );
}
