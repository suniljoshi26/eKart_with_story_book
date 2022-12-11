import React from "react";
import { ImSpinner6 } from "react-icons/im";
function Loading() {
  return (
    <div className="  text-black text-6xl flex justify-center mt-40 items-center">
      Loading...
      <ImSpinner6 className="animate-spin" />
    </div>
  );
}
export default Loading;
