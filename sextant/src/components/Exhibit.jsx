import React from "react";
import { Banner } from "./Banner";
import styled from "@emotion/styled";

const Layout = styled.div`
width:100%;
`;
export const Exhibit = ({children}) => {
    return(
        <>
        <Banner/>
        <Layout>
            {children}
        </Layout>
        </>
    )
}