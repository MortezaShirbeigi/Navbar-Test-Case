import React from 'react'
import Footer from '../footer';
import Header from '../header'

const Layout = ({ children }) => {
    return (
        <div className="position-relative vh-100">
            <Header />
                <main>
                    {children}
                </main>
            <Footer />
        </div>
    )
}

export default Layout;
