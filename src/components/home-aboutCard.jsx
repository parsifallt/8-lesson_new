import { toast } from "react-toastify";
import { NumericFormat } from "react-number-format";
import { useState } from "react";

const HomeAboutCard = ({ icon, title, body }) => {
  const [dark, setDark] = useState(false);

  return (
    <div className={` max-md:p-5 p-10 max-sm:text-center`}>
      <i className={`fa ${icon} text-[#2405F2] text-3xl`}></i>
      <h3 className="text-2xl max-md:text-xl font-[500] my-3">{title}</h3>
      <p className="text-[#343543] max-md:text-sm">{body}</p>
    </div>
  );
};

export default HomeAboutCard;
