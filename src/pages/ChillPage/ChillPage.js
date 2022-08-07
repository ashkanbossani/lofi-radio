import React from 'react';
import "./ChillPage.scss";

import Dashboard from '../../components/Dashboard/Dashboard';
import Login from '../../components/Login/Login';

const ChillPage = () => {
    const code = new URLSearchParams(window.location.search).get("code")
    return (
        code ? <Dashboard code={code} /> : <Login />
    );
};

export default ChillPage;