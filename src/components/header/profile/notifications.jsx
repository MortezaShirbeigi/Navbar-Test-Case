import React, { useCallback, useEffect, useState } from 'react'
import NotificationIcon from '../../../assets/images/notification-icon.svg'
import NotificationIconLight from '../../../assets/images/notification-icon-light.svg'
import { FiBell } from 'react-icons/fi';
import { FaChevronLeft } from 'react-icons/fa';
import { Button } from 'react-bootstrap';

const Notifications = () => {
    const[open, setOpen] = useState(false);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const clickListeners = useCallback(() => {
        setOpen(false)
        window.removeEventListener("click", clickListeners)
    })

    const toggleHandler = () => {
        setOpen(open => !open)
    }

    useEffect(() => {
    if(open) {
        window.addEventListener("click", clickListeners)
    }
    }, [clickListeners, open])

    return (
        <div>
            <div className="notifications">
            <div onClick={toggleHandler} className="position-relative d-flex justify-content-end px-4 cursor-pointer">
                <img className="notifications__icon" width="30px" height="30px" src={NotificationIcon} alt="person" />
                <img className="notifications__light" width="7px" height="7px" src={NotificationIconLight} alt="person" />
            </div>
            <div onClick={e => e.stopPropagation()} className={`position-absolute notifications__dropdown ${open ? "show-dropdown" : "hide-dropdown"}`}>
                <div className="d-flex justify-content-between text-secondary p-4 cursor-pointer miniprofile__row">
                    <div>
                        <span>
                            <FiBell className="text-info m-2" />
                        </span>
                        <span>پرداخت با موفقیت انجام شد</span>
                    </div>
                    <div>
                        <FaChevronLeft className="text-info" />
                    </div>
                </div>
                <div className="d-flex justify-content-between text-secondary p-4 cursor-pointer miniprofile__row">
                    <div>
                        <span>
                            <FiBell className="text-info m-2" />
                        </span>
                        <span>پرداخت با موفقیت انجام شد</span>
                    </div>
                    <div>
                        <FaChevronLeft className="text-info" />
                    </div>
                </div>
                <div className="d-flex justify-content-between text-secondary p-4 cursor-pointer miniprofile__row">
                    <div>
                        <span>
                            <FiBell className="text-info m-2" />
                        </span>
                        <span>پرداخت با موفقیت انجام شد</span>
                    </div>
                    <div>
                        <FaChevronLeft className="text-info" />
                    </div>
                </div>
                <div className="d-flex justify-content-between text-secondary p-4 cursor-pointer miniprofile__row">
                    <div>
                        <span>
                            <FiBell className="text-info m-2" />
                        </span>
                        <span>پرداخت با موفقیت انجام شد</span>
                    </div>
                    <div>
                        <FaChevronLeft className="text-info" />
                    </div>
                </div>
                <Button variant="secondary notifications__button" className="w-100 p-3">مشاهده همه پیام ها</Button>
            </div>
        </div>
        </div>
    )
}

export default Notifications;
