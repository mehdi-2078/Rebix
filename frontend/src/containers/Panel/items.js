import {MdManageSearch, MdOutlineManageAccounts} from "react-icons/md";
import {IoCreateOutline, IoExitOutline} from "react-icons/io5";
import {lagOut} from "../../helper/logOut.js";

export const sideBarItems = [
    {
        name: 'manageTodo',
        title: 'مدیریت todo ها',
        link: 'Panel/manageTodo',
        icon: MdManageSearch
    },
    {
        name: 'makeTodo',
        title: 'ساخت todo',
        link: 'Panel/makeTodo',
        icon: IoCreateOutline
    },
    {
        name: 'settings',
        title: 'تنظیمات حساب کاربری',
        link: 'Panel/settings',
        icon: MdOutlineManageAccounts
    },
    {
        name: 'exit',
        title: 'خروج',
        link: '/',
        icon: IoExitOutline
    },
]