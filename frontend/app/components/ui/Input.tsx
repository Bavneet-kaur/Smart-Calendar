"use client";

import React from "react";

interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  required?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      error,
      required = false,
      className = "",
      placeholder,
      ...props
    },
    ref
  ) => {
    return (
      <div className="flex flex-col gap-1 w-full">
        <label className="text-sm font-medium text-gray-700">
          {label}
          {required && <span className="text-red-600 ml-1">*</span>}
        </label>

        <input
          ref={ref}
          placeholder={placeholder || `Enter ${label.toLowerCase()}`}
          {...props}
          className={`
            px-3 py-2 border rounded-lg outline-none transition
            placeholder:text-gray-400 placeholder:text-sm
            ${
              error
                ? "border-red-500 focus:ring-1 focus:ring-red-400"
                : "border-gray-300 focus:ring-1 focus:ring-gray-500"
            }
            ${className}
          `}
        />

        {error && (
          <span className="text-sm text-red-500">{error}</span>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
