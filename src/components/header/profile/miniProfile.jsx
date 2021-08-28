import React, { useCallback, useEffect, useState } from "react";
import { FaChevronLeft } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import PersonImage from "../../../assets/images/person.jpg";

const MiniProfile = () => {
  const [open, setOpen] = useState(false);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const clickListeners = useCallback(() => {
    setOpen(false);
    window.removeEventListener("click", clickListeners);
  });

  const toggleHandler = () => {
    setOpen((open) => !open);
  };

  useEffect(() => {
    if (open) {
      window.addEventListener("click", clickListeners);
    }
  }, [clickListeners, open]);

  const miniProfileData = [
    {
      title: "مشاهده پنل کاربری",
      component: <FaUser className="text-info m-2" />,
    },
    {
      title: "علاقه‌مندی‌ها",
      component: <FaUser className="text-info m-2" />,
    },
  ];

  return (
    <div className="position-relative miniprofile">
      <img
        onClick={toggleHandler}
        className="rounded-circle cursor-pointer"
        width="50px"
        height="50px"
        src={PersonImage}
        alt="person"
      />
      <div
        onClick={(e) => e.stopPropagation()}
        className={`position-absolute miniprofile__dropdown ${
          open ? "show-dropdown" : "hide-dropdown"
        }`}
      >
        <div className="d-flex justify-content-end p-4">
          <p className="text-secondary Bold text-left p-2">سارا خلیل‌زاده</p>
          <img
            className="rounded-circle"
            width="70px"
            height="70px"
            src={PersonImage}
            alt="person"
          />
        </div>
        {miniProfileData.map((item, index) => (
           <div key={index} className="d-flex justify-content-between text-secondary p-4 cursor-pointer miniprofile__row">
           <div>
             <FaChevronLeft className="text-info" />
           </div>
           <div>
             <span>{item.title}</span>
             <span>
               {item.component}
             </span>
           </div>
         </div> 
        ))}
        <div className="d-flex justify-content-end text-secondary p-4 cursor-pointer miniprofile__row">
          <div>
            <span className="text-primary">خروج از حساب کاربری</span>
            <span>
              <FaUser className="m-2 text-primary" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiniProfile;
