"use client";

import { toast } from "react-toastify";
import { BsFillInfoCircleFill, BsFillPatchCheckFill } from "react-icons/bs";
import { PiSealWarningFill } from "react-icons/pi";
import { BiSolidError } from "react-icons/bi";
import { RiCloseLine } from "react-icons/ri";

type ToastType = "info" | "error" | "warning" | "update";

const icons = {
  info: <BsFillInfoCircleFill size={20} />,
  error: <BiSolidError size={20} />,
  warning: <PiSealWarningFill size={20} />,
  update: <BsFillPatchCheckFill size={20} />,
};

const gradients = {
  info: "from-sky-500 to-blue-600",
  error: "from-red-500 to-pink-600",
  warning: "from-amber-400 to-yellow-500",
  update: "from-lime-500 to-green-600",
};

export const showToast = (
  message: string,
  type: ToastType = "info"
) => {
  toast(
    ({ closeToast }) => (
      <div
        className={`
          flex items-center gap-3
          px-5 py-3
          rounded-full
          text-white text-sm font-medium
          bg-linear-to-r ${gradients[type]}
          shadow-2xl
          shadow-${gradients[type].replace("from-", "from-").replace("to-", "to-")}80
          min-w-70
        `}
      >
        {icons[type]}

        <span className="flex-1">{message}</span>

        <button onClick={closeToast}>
          <RiCloseLine size={20} />
        </button>
      </div>
    ),
    {
      closeButton: false,
    }
  );
};
