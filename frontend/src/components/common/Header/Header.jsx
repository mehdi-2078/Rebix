import {FaUserAlt, FaGgCircle, FaUserEdit} from "react-icons/fa";
import {Link} from "react-router-dom";

import {DarkModeToggle} from "react-dark-mode-toggle-2";
import {useState} from "react";
import useDarkSide from "../../../hooks/useDarkSide.jsx";
import {lagOut} from "../../../helper/logOut.js";
import {fullName, isLogin} from "../../../helper/storages.js";

export const Header = () => {
    const [colorTheme, setTheme] = useDarkSide();
    const [isDarkMode, setIsDarkMode] = useState(colorTheme === "light");
    const handleDarkMode = (checked) => {
        setTheme(colorTheme);
        setIsDarkMode(checked);
    }

    return (
        <>
            <div className="shadow-2xl bg-black/40 pt-6 pb-4 w-[100%]">

                <div className="flex md:w-[80%] justify-between flex-wrap w-[90%] mx-auto ">
                    <div className="flex items-center">
                        <FaGgCircle size={32}/>
                        <span className="text-2xl mr-2"> Rebix company</span>
                    </div>
                    <DarkModeToggle
                        className="!w-[120px]"
                        onChange={handleDarkMode}
                        isDarkMode={isDarkMode}
                    />
                    {!isLogin ? (
                        <div className="flex">
                            <Link to="/login" className="flex items-center cursor-pointer
                     px-2 hover:bg-white/50 py-1  border-[0.5px] rounded mx-2">
                                <FaUserAlt/>
                                <span className="mx-2">ورود</span>
                            </Link>
                            <Link to="/register" className="flex items-center cursor-pointer
                     px-2 hover:bg-white/50 py-1 border-[0.5px] rounded mx-2">
                                <FaUserEdit/>
                                <span className="mx-2">ثبت نام</span>
                            </Link>
                        </div>
                    ) : (
                        <div className="flex">
                            <div className="flex items-center cursor-pointer
                     px-2 hover:bg-white/50 py-1  border-[0.5px] rounded mx-2">
                                <FaUserAlt/>
                                <span className="mx-2">{fullName}</span>
                            </div>
                            <div onClick={lagOut} className="flex items-center cursor-pointer
                     px-2 hover:bg-white/50 py-1 border-[0.5px] rounded mx-2">
                                <FaUserEdit/>
                                <span className="mx-2">خروج</span>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};
