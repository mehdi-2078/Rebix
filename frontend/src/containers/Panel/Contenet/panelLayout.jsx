import {SideBar} from "../SideBar.jsx";

export const PanelLayout = ({children}) => {
    return (
        <div className="flex min-h-screen">
            <div className="md:w-3/12 xl:w-[20%] lg:flex flex-col bg-black/20">
                <SideBar/>
            </div>
            <div className=" w-full md:w-10/12 xl:w-[80%] pt-12 bg-black/5">
                <div className="w-11/12 mx-auto">
                    {children}
                </div>
            </div>
        </div>
    );
};
