import React, { FC, useEffect } from "react";
import { TiWarning } from "react-icons/ti";
import { BiErrorAlt } from "react-icons/bi";
import { BsPatchCheck } from "react-icons/bs";
import { MdCancel } from "react-icons/md";
import WithAlert from "./hoc/WithAlert";

const themMap = {
  success: {
    color: "bg-green-400",
    Icon: BsPatchCheck,
  },
  error: {
    color: " bg-red-400 ",
    Icon: BiErrorAlt,
  },
  warning: {
    color: "bg-yellow-500",
    Icon: TiWarning,
  },
};
type AlertProps = {
  alert: { massage: string; type: string };
  removeAlert: any;
};

const Alert: FC<AlertProps> = ({ alert, removeAlert }) => {
  //alert timer and remove
  useEffect(() => {
    if (alert) {
      const timeout = setTimeout(removeAlert, 5 * 1000);
      return () => {
        clearTimeout(timeout); //  alert remove function
      };
    }
  }, [alert]);

  if (!alert) {
    return <></>;
  }

  const { massage, type } = alert;
  const { color, Icon } = themMap[type];
  return (
    <div>
      {" "}
      <div className="flex items-center justify-center px-4">
        <div
          role="alert"
          id="alert"
          className="transition duration-150 ease-in-out w-full lg:w-11/12 mx-auto bg-white dark:bg-gray-800 shadow rounded flex flex-col py-4 md:py-0 items-center md:flex-row justify-between"
        >
          <div className="flex flex-col items-center md:flex-row">
            <div
              className={
                "mr-3 p-3 rounded md:rounded-tr-none md:rounded-br-none text-white text-2xl " +
                " " +
                color
              }
            >
              <Icon />
            </div>
            <p className="mr-2 text-base font-bold text-gray-800 dark:text-gray-100 mt-2 md:my-0">
              {type}
            </p>
            <div className="h-1 w-1 bg-gray-300 dark:bg-gray-700 rounded-full mr-2 hidden xl:block"></div>
            <p className="text-sm lg:text-base dark:text-gray-400 text-gray-600 lg:pt-1 xl:pt-0 sm:mb-0 mb-2 text-center sm:text-left">
              {massage}
            </p>
          </div>
          <div className="flex xl:items-center lg:items-center sm:justify-end justify-center pr-4">
            <button
              onClick={removeAlert}
              className="focus:outline-none focus:text-gray-400 hover:text-gray-400  cursor-pointer text-2xl text-gray-600 dark:text-gray-400"
            >
              <MdCancel />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default WithAlert(Alert);
