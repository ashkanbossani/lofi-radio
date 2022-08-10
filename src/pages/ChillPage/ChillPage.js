import React from 'react';
import "./ChillPage.scss";

import Dashboard from '../../components/Dashboard/Dashboard';
import Login from '../../components/Login/Login';
import { Helmet } from 'react-helmet';


const ChillPage = () => {
    const code = new URLSearchParams(window.location.search).get("code")
    return (
        <>
        <Helmet>
            <title>LOUNGE</title>
        </Helmet>
        {/* This component renders either a `Dashboard` component or a `Login` component. The component that is rendered depends on the value of the `code` prop. If the `code` prop is `true`, the `Dashboard` component is rendered. If the `code` prop is `false`, the `Login` component is rendered. */}
    <div className="chill-container">{code ? <Dashboard code={code} /> : <Login />}</div>
    </>
    )
    ;
};

export default ChillPage;