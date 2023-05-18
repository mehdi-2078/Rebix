import {PanelLayout} from "../../index.js";
import {useEffect, useState} from "react";
import {ConvertDate} from "../../../helper/ConvertDate.js";

export const Settings = () => {
        // const time = new Date().toLocaleTimeString();
        // const date = new Date().toLocaleDateString('fa-IR-u-nu-latn');
        const {time, date} = ConvertDate()

        const [userIp, setUserIp] = useState()
        useEffect(() => {
            fetch('https://api.ipify.org?format=json').then(response => {
                return response.json();
            }).then((res) => {
                setUserIp(res.ip)
            }).catch((err) => console.error('Problem fetching my IP', err))
        }, []);
        return (
            <PanelLayout>
                <div className="flex items-center">
                    <span className="text-2xl">ip </span> &nbsp; &nbsp;
                    <span className="text-2xl">شما</span>: &nbsp;
                    <span className="text-lg">{userIp}</span>
                </div>
                <div className="flex mt-6 items-center">
                    <span className="text-xl ">تاریخ آخرین ورود شما</span>: &nbsp;
                    <span className="text-lg"> {date}</span>
                </div>
                <div className="flex mt-6 items-center">
                    <span className="text-xl ">ساعت آخرین ورود شما</span>: &nbsp;
                    <span className="text-lg"> {time}</span>
                </div>

                {/*<div className="flex mt-6 items-center">*/}
                {/*    <span className="text-xl "> ساعت آخرین ورود شما</span>: &nbsp;*/}
                {/*    <span className="text-lg"> {time}</span>*/}
                {/*</div>*/}
            </PanelLayout>

        );
    }
;
