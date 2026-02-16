"use client";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ToastProvider = () => {
  return (
    <ToastContainer
      position="top-right"
      autoClose={4000}
      hideProgressBar
      closeButton={false}
      toastClassName="!bg-transparent !shadow-none !p-0"
      // bodyClassName="!p-0"
    />
  );
};

export default ToastProvider;
