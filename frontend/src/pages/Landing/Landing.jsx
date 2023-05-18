import {Banner} from "../../containers/index.js";
import {Layout} from "../../containers/Layout/Layout.jsx";
import {useRef} from "react";

export const Landing = () => {
    const myRef = useRef(null);

    return (
        <Layout>
            <Banner/>
        </Layout>
    );
};
