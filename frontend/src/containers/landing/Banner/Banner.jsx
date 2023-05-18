import one from '../../../assets/images/landing/img1.png'
import {motion} from 'framer-motion';
import {useNavigate} from "react-router-dom";

export const Banner = () => {
    const navigate = useNavigate();
    return (
        <div
            className="flex pt-2 md:pt-16 md:mt-0 overflow-hidden h-[89vh] flex-col md:flex-row md:w-[80%]
            w-[90%] mx-auto justify-center md:justify-between ">
            <motion.div
                className="flex w-[80%] mx-auto md:mx-0 mt-4 md:w-[40%] flex-wrap flex-col items-center md:item-start">
                <motion.span
                    initial={{x: '100vw', opacity: 0}}
                    animate={{x: 0, opacity: 1}}
                    transition={{duration: 1}}
                    className=" text-3xl md:text-5xl"
                >
                    درود و خوش آمد 🙌
                </motion.span>
                <motion.span
                    initial={{x: '100vw', opacity: 0}}
                    animate={{x: 0, opacity: 1}}
                    transition={{duration: 1.3}}
                    className=" text-2xl my-8 md:text-3xl "
                >
                    😻 با این وبسایت به راحتی کار های روزانه خودت رو مدیریت کن
                </motion.span>
                <motion.span
                    initial={{x: '100vw', opacity: 0}}
                    animate={{x: 0, opacity: 1}}
                    transition={{duration: 1.5}}
                    className="text-2xl mt-2 md:text-3xl mt-2">
                    منتظر چی هستی پس؟! بزن بریم🤖
                </motion.span>
                <motion.button
                    onClick={()=>navigate('/Panel/manageTodo')}
                    initial={{x: '100vw', opacity: 0}}
                    animate={{x: 0, opacity: 1}}
                    transition={{duration: 1.5}}
                    className=" border text-lg md:text-xl bg-black/10 border-black/70 dark:border-white/70
                    rounded-lg mt-16 py-2 w-[120px] hover:bg-white/20 transition-all"
                >
                    بزن بریم✈️
                </motion.button>
            </motion.div>
            <motion.div
                initial={{scale: 0.2, opacity: 0}}
                animate={{scale: 1, opacity: 1}}
                transition={{duration: 1.5}}
                className="w-[90%] md:w-[50%] flex mx-auto md:mx-0 mt-5  "
            >
                <img className="md:h-[400px] h-[300px] " src={one} alt="mehdi"/>
            </motion.div>
        </div>

    )
        ;
};
