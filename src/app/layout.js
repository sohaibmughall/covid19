import React from 'react';
import Header from '../componets/Header/Header';
import Footer from './../componets/Footer/footer';

export default function Layout({ children }) {
    return (
        <>
            <Header />
            {children}
        </>
    );
}
