import React from 'react';
import { BrowserRouter, Route, Routes ,Redirect } from 'react-router-dom';
import Layout from '../app/layout';
import Login from '../screens/auth/login';
import Signup from '../screens/auth/signup';
import Dashboard from './../screens/Dashboard/Dashboard';
import AuthLayout from './../app/authlayout';
import Singlepeview from './../screens/singlepage/index';

export default function Router() {
    return (
        <>
            <BrowserRouter>
                {
                    !localStorage.getItem("login") ?
                        <AuthLayout>
                            <Routes>
                                <Route path="/" element={<Login />} />
                                <Route path="/Signup" element={<Signup/>} />
                            </Routes>
                        </AuthLayout> :
                        <Layout>
                            <Routes>
                                <Route index path="/" element={<Dashboard />} />
                                <Route index path="/preview" element={<Singlepeview />} />
                              
                            </Routes>

                        </Layout>
                }
            </BrowserRouter>

        </>
    );
}
