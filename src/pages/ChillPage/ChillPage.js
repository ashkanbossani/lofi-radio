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
    <div className="chill-container">{code ? <Dashboard code={code} /> : <Login />}</div>
    </>
    )
    ;
};

export default ChillPage;