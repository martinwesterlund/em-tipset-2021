import React from 'react';
import Header from './Header';
// import context from "../context/context";
// const { user } = useContext(context);

const Layout = ({children}) => {
    return (
        <>
            <Header></Header>
            {children}
        </>
    );
}

export default Layout;
