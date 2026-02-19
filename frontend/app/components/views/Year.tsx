"use client";

import { useMemo } from "react";

const YearView = () => {
  const today = new Date();
  const currentYear = today.getFullYear();

  const months = useMemo(() => {
    return Array.from({ length: 12 }, (_, monthIndex) => {
      const firstDay = new Date(currentYear, monthIndex, 1);
      const lastDay = new Date(currentYear, monthIndex + 1, 0);

      const startDay = firstDay.getDay(); // 0 (Sun) - 6 (Sat)
      const totalDays = lastDay.getDate();

      const days: (Date | null)[] = [];

      // Previous month's trailing days
      for (let i = 0; i < startDay; i++) {
        days.push(null);
      }

      // Current month days
      for (let day = 1; day <= totalDays; day++) {
        days.push(new Date(currentYear, monthIndex, day));
      }

      // Fill remaining grid (6 rows × 7 days = 42 cells)
      while (days.length < 42) {
        days.push(null);
      }

      return {
        monthIndex,
        days,
      };
    });
  }, [currentYear]);

  return (
    <div className="min-h-screen bg-white p-6 text-gray-500  border border-gray-300 rounded-3xl">
      <div className="grid grid-cols-4 gap-10">
        {months.map(({ monthIndex, days }) => (
          <div key={monthIndex}>
            {/* Month Title */}
            <h2 className="text-lg font-semibold mb-4 ml-2">
              {new Date(currentYear, monthIndex).toLocaleString("default", {
                month: "long",
              })}
            </h2>

            {/* Weekday Header */}
            <div className="grid grid-cols-7 text-xs text-gray-500  -ml-3 mb-2">
              {["S", "M", "T", "W", "T", "F", "S"].map((day, i) => (
                <div key={i} className="text-center">
                  {day}
                </div>
              ))}
            </div>

            {/* Days Grid */}
            <div className="grid grid-cols-7 text-sm">
              {days.map((date, i) => {
                const isToday =
                  date &&
                  date.getDate() === today.getDate() &&
                  date.getMonth() === today.getMonth() &&
                  date.getFullYear() === today.getFullYear();

                return (
                  <div
                    key={i}
                    className={`text-center w-8 h-8 flex items-center justify-center rounded-full cursor-pointer
                      ${
                        date
                          ? "text-gray-400 hover:bg-gray-700 hover:text-gray-100"
                          : "text-gray-400"
                      }
                      ${
                        isToday
                          ? "bg-blue-500 text-white font-semibold"
                          : ""
                      }
                    `}
                  >
                    {date ? date.getDate() : ""}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default YearView;
