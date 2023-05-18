import {Header} from "../../components/index.js";

export const Layout = ({children}) => {
    return (
        <>
            <Header/>
            {children}
        </>

    );
};
