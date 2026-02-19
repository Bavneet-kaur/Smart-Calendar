"use client";

import { useState } from "react";

const WeekView = () => {
    const [currentDate] = useState(new Date());
    const getStartOfWeek = (date: Date) => {
        const day = date.getDay(); // 0-6
        const diff = date.getDate() - day;
        return new Date(date.setDate(diff));
    };

    const startOfWeek = getStartOfWeek(new Date());

    const weekDays = Array.from({ length: 7 }).map((_, i) => {
        const d = new Date(startOfWeek);
        d.setDate(startOfWeek.getDate() + i);
        return d;
    });
    const hours = Array.from({ length: 23 }).map((_, i) => i + 1);
    // const isToday = date.toDateString() === new Date().toDateString();
    return (
        <div className="max-h-screen bg-white  flex flex-col border border-gray-300 rounded-2xl shadow-md">
            <div className="grid border-b border-gray-300"
                style={{ gridTemplateColumns: "80px repeat(7, 1fr)" }}>
                <div className="border-r border-gray-300" />

                {weekDays.map((day, index) => (
                    <div
                        key={index}
                        className="p-2 text-center border-r border-gray-300"
                    >
                        <div className="text-sm text-gray-400">
                            {day.toLocaleString("default", { weekday: "short" }).toUpperCase()}
                        </div>

                        <div className="text-xl mt-1">
                            {day.getDate()}
                        </div>
                    </div>
                ))}
            </div>

            {/* Time Grid */}
            <div className="flex-1">
                <div
                    className="grid min-h-full"
                    style={{ gridTemplateColumns: "80px repeat(7, 1fr)" }}
                >
                    {/* Time Column */}
                    <div className="border-r border-gray-300">
                        {hours.map((hour) => (
                            <div
                                key={hour}
                                className="h-10 text-xs text-gray-400 border-b border-gray-300 pr-2 text-right"
                            >
                                {hour > 12
                                    ? `${hour - 12} PM`
                                    : hour === 12
                                        ? "12 PM"
                                        : `${hour} AM`}
                            </div>
                        ))}
                    </div>

                    {/* Day Columns */}
                    {weekDays.map((_, dayIndex) => (
                        <div key={dayIndex} className="border-r text-center  border-gray-300">
                            {hours.map((hour) => (
                                <div
                                    key={hour}
                                    className="h-10 border-b border-gray-300"
                                />
                            ))}
                        </div>
                    ))}

                </div>
            </div>
        </div>
    );
};

export default WeekView;

