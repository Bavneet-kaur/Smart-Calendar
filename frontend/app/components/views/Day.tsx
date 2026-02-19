"use client";

import { useEffect, useMemo, useRef, useState } from "react";

const DayView = () => {
  const today = new Date();
  const containerRef = useRef<HTMLDivElement>(null);

  const [currentTime, setCurrentTime] = useState(new Date());

  // Update current time every minute
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);

    return () => clearInterval(interval);
  }, []);
  const hours = useMemo(() => {
    return Array.from({ length: 23 }, (_, i) => i + 1);
  }, []);
  const hourHeight = 40; // 10 * 4 = 40px (Tailwind h-16)
  const getCurrentTimePosition = () => {
    const hour = currentTime.getHours();
    const minutes = currentTime.getMinutes();

    if (hour < 1 || hour > 23) return null;

    const totalMinutes = (hour - 1) * 60 + minutes;
    return (totalMinutes / 60) * hourHeight;
  };

  const timePosition = getCurrentTimePosition();

  return (
    <div className="h-screen bg-white flex flex-col  border border-gray-300 rounded-3xl overflow-hidden">

      {/* Header */}
      <div className="p-2 border-b border-gray-300 flex items-center ">
        {/* <div className="text-xs text-gray-400">
          {Intl.DateTimeFormat().resolvedOptions().timeZone === "Asia/Kolkata" ? "+05:30" : ""}
        </div> */}

        <div className="flex flex-col items-center ml-6">
          <div className="text-sm text-gray-500 font-medium uppercase">
            {today.toLocaleString("default", { weekday: "short" })}
          </div>

          <div className="w-10 h-10 rounded-full bg-sky-500  text-gray-50 flex items-center justify-center text-lg font-semibold">
            {today.getDate()}
          </div>
        </div>
      </div>

      {/* Time Grid */}
      <div
        ref={containerRef}
        className="flex-1 overflow-auto relative"
      >
        <div className="relative">

          {/* Current Time Line */}
          {timePosition !== null && (
            <div
              className="absolute left-18.5 right-0 flex items-center"
              style={{ top: timePosition }}
            >
              <div className="w-3 h-3 bg-red-500 rounded-full z-10" />
              <div className="flex-1 h-0.5 bg-red-500" />
            </div>
          )}

          {/* Hours */}
          {hours.map((hour) => (
            <div
              key={hour}
              className="flex border-b border-gray-300"
            >
              {/* Time label */}
              <div className="w-20 text-right pr-4 pt-1 text-xs text-gray-400">
                {hour > 12
                  ? `${hour - 12} PM`
                  : hour === 12
                  ? "12 PM"
                  : `${hour} AM`}
              </div>

              {/* Time slot */}
              <div className="flex-1 h-10 border-l border-gray-300" />
            </div>
          ))}

        </div>
      </div>
    </div>
  );
};

export default DayView;
