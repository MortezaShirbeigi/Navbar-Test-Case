import React, { useCallback, useEffect, useState } from 'react'



const WebsiteLanguage = () => {
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
            <div className="position-relative website-Language">
            <div onClick={toggleHandler} className="flag flag__iran cursor-pointer"></div>
            <div onClick={e => e.stopPropagation()} className={`position-absolute website-Language__dropdown ${open ? "show-dropdown" : "hide-dropdown"}`}>
                <div className="d-flex justify-content-end p-3 website-Language__row">
                    <div className="text-secondary m-1">ایران</div>
                    <div className="flag flag__iran"></div>
                </div>
                <div className="d-flex justify-content-end p-3 website-Language__row">
                    <div className="text-secondary m-1">ایران</div>
                    <div className="flag flag__iran"></div>
                </div>
                <div className="d-flex justify-content-end p-3 website-Language__row">
                    <div className="text-secondary m-1">ایران</div>
                    <div className="flag flag__iran"></div>
                </div>
                <div className="d-flex justify-content-end p-3 website-Language__row">
                    <div className="text-secondary m-1">ایران</div>
                    <div className="flag flag__iran"></div>
                </div>
                <div className="d-flex justify-content-end p-3 website-Language__row">
                    <div className="text-secondary m-1">ایران</div>
                    <div className="flag flag__iran"></div>
                </div>
                <div className="d-flex justify-content-end p-3 website-Language__row">
                    <div className="text-secondary m-1">ایران</div>
                    <div className="flag flag__iran"></div>
                </div>
                <div className="d-flex justify-content-end p-3 website-Language__row">
                    <div className="text-secondary m-1">ایران</div>
                    <div className="flag flag__iran"></div>
                </div>
                <div className="d-flex justify-content-end p-3 website-Language__row">
                    <div className="text-secondary m-1">ایران</div>
                    <div className="flag flag__iran"></div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default WebsiteLanguage;
