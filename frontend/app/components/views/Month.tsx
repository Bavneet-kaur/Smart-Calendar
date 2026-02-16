"use client";

import { useState } from "react";

const MonthView = () => {
    const [currentDate, setCurrentDate] = useState(new Date());
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDayofIndex = new Date(year, month, 1).getDay();
    const daysInPrevMonth = new Date(year, month, 0).getDate();
    const totalCells = 42;
    const days = [];
    for (let i = firstDayofIndex; i > 0; i--) {
        days.push({
            day: daysInPrevMonth - i,
            currentMonth: false,
        });
    }

    for (let i = 1; i <= daysInMonth; i++) {
        days.push({
            day: i,
            currentMonth: true,
        });
    }

    while (days.length < totalCells) {
        days.push({
            day: days.length - (firstDayofIndex + daysInMonth) + 1,
            currentMonth: false,
        });
    }

    const weekDays = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

    return (
        <div className="w-full h-full  text-gray-800 min-h-screen bg-white border-2 border-gray-300 rounded-2xl">
            <div className="grid grid-cols-7 border-b border-gray-300">
                {weekDays.map((day) => (
                    <div
                        key={day}
                        className="p-4 text-lg font-semibold text-center justify-center text-stone-400 border-r border-gray-300 last:border-0"
                    >
                        {day}
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-7 auto-rows-fr min-h-150">
                {days.map((day, index) => (
                    <div
                        key={index}
                        className={`h-32 p-4 text-sm border-r border-b border-gray-300 ${day.currentMonth ? "text-black" : "text-gray-400"
                            }`}
                    >
                        <span
                            className={`text-md font-medium  ${day.currentMonth ? "text-gray-900" : "text-gray-400"
                                }`}
                        >
                            {day.day}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MonthView;
