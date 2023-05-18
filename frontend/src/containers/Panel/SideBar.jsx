import {sideBarItems} from './items.js'
import {useLocation, useNavigate} from "react-router-dom";
import {MdClose, MdMenu} from "react-icons/md";
import {useState} from "react";
import {DarkModeToggle} from "react-dark-mode-toggle-2";
import useDarkSide from "../../hooks/useDarkSide.jsx";
import {lagOut} from "../../helper/logOut.js";
import {fullName} from "../../helper/storages.js";


export const SideBar = () => {
    const navigate = useNavigate();
    const {pathname} = useLocation();
    const [nav, setNav] = useState(false);
    const [colorTheme, setTheme] = useDarkSide();
    const [isDarkMode, setIsDarkMode] = useState(colorTheme === "light");

    const showNav = () => {
        setNav(!nav);
    };

    const handleDarkMode = (checked) => {
        setTheme(colorTheme);
        setIsDarkMode(checked);
    }
    return (
        <>
            <div className="hidden lg:block text-center ml-8 my-10">
                <DarkModeToggle
                    className="!w-[120px]"
                    onChange={handleDarkMode}
                    isDarkMode={isDarkMode}
                />
                <span className="text-xl flex justify-center mb-10 mt-4 font-semibold">{fullName}</span>
                {sideBarItems.map((item, index) => (
                    <div onClick={() => {
                        navigate(`../${item.link}`, {replace: true})
                        if (item.name === 'exit') lagOut()
                    }} key={index} className={`pr-6 mx-2 rounded border-b-[0.5px] py-2 cursor-pointer hover:bg-white/50
                    mt-6 flex items-center ${pathname.includes(item.name) && 'bg-white/50 dark:bg-black/50 '}`}>
                        <span className="text-2xl"><item.icon/></span>
                        <span className="text-lg mr-4">{item.title}</span>
                    </div>
                ))}
            </div>
            {/* nav icons */}

            {!nav && (
                <MdMenu className=" mt-8 mr-4 text-3xl z-50 lg:hidden"
                        aria-hidden="true" onClick={showNav}/>
            )}
            {/* mobile nav */}
            <nav
                className={`h-[100vh] fixed top-[0px] flex flex-col py-8 items-center w-4/12 lg:hidden bg-black z-40 duration-1000 ${
                    nav ? 'right-[0px]' : 'right-[-100vw]'
                } `}
            >
                {nav && (
                    <MdClose size={35} className=" mt-8 mb-8 z-50 lg:hidden" aria-hidden="true" onClick={showNav}/>
                )}

                {sideBarItems.map((item, index) => (
                    <div onClick={() => {
                        navigate(`../${item.link}`, {replace: true})
                    }
                    } key={index} className={`pr-6 my-20 w-full  mx-2 rounded border-b-[0.5px] py-2 cursor-pointer hover:bg-white/50
                    mt-6 flex items-center ${pathname.includes(item.name) && 'bg-white/50'}`}>
                        <span className="text-2xl"><item.icon/></span>
                        <span className="text-lg mr-4">{item.title}</span>
                    </div>
                ))}
            </nav>
        </>
    );
};
