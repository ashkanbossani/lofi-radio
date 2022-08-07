import React from 'react';
import "./ChillPage.scss";

import Dashboard from '../../components/Dashboard/Dashboard';
import Login from '../../components/Login/Login';
import { Helmet } from 'react-helmet';

import { Container } from '../../styles/Chill.styles';
const ChillPage = () => {
    const code = new URLSearchParams(window.location.search).get("code")
    return (
        <>
        <Helmet>
            <title>LOUNGE</title>
        </Helmet>
    <Container>{code ? <Dashboard code={code} /> : <Login />}</Container>
    </>
    )
    ;
};

export default ChillPage;