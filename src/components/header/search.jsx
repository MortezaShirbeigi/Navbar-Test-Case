import { Button } from "react-bootstrap";
import React, { useEffect } from "react";
import { FormControl } from "react-bootstrap";
import { FaChevronLeft, FaSearch } from "react-icons/fa";
import { useState } from "react";
import PersonImage from "../../assets/images/person.jpg";
import { BsGearFill } from "react-icons/bs";


const Search = () => {
  const [searchKeyword, setSearchKeyword] = useState("");

  const changeValueHandler = (e) => {
    setSearchKeyword(e.target.value);
  };

  useEffect(() => {}, [searchKeyword]);

  const searchData = [
    { title: "پرداخت با موفقیت انجام شد" },
    { title: "پرداخت با موفقیت انجام شد" },
    { title: "پرداخت با موفقیت انجام شد" },
  ];

  return (
    <div className="position-relative">
      <div className="position-relative search">
        <div className="position-absolute search__icon">
          <FaSearch />
        </div>
        <FormControl
          onChange={changeValueHandler}
          className={`search__input ${
            searchKeyword !== ""
              ? "search__input--enable"
              : "search__input--disable"
          }`}
          placeholder="جستجوی فیلم، سریال، انیمیشن، مستند، بازیگر و ..."
        />
        <Button
          className={`position-absolute search__button search__button${
            searchKeyword !== "" ? "--enable" : "--disable"
          }`}
          variant="secondary"
        >
          <span>تنظیمات پیشرفته</span>
          <span className="p-1">
            <BsGearFill />
          </span>
        </Button>
      </div>
      <div
        className={`position-absolute w-100 search__dropdown ${
          searchKeyword !== "" ? "search__dropdown--show-dropdown" : "search__dropdown--hide-dropdown"
        }`}
      >
        <div className="p-5">
          <span className="text-secondary">
            محتوای مورد نظر را پیدا نکردید؟
          </span>
          <span className="text-primary">مشاهده همه نتایج</span>
        </div>
        {searchData.map((searchItem, index) => (
          <div
            key={index}
            className="d-flex align-items-center justify-content-between text-secondary p-4 cursor-pointer w-100 search__row"
          >
            <div>
              <span>
                <img
                  className="rounded-circle"
                  width="70px"
                  height="70px"
                  src={PersonImage}
                  alt="person"
                />
              </span>
              <span className="m-3">{searchItem.title}</span>
            </div>
            <div>
              <FaChevronLeft className="text-info" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;
