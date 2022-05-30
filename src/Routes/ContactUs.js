import React from 'react'
import {Link ,Outlet} from 'react-router-dom'
export default function ContactUs(){
    return(
    <section className="jumbotron">
        <div className="container d-flex flex-column align-items-center">
            <h1 className="jumbotron-heading">Contact Us!</h1>
            <p className="lead text-muted">Welcome to Contact Us Page......</p>
        </div>
        <Link to="/contact-us/address">To address</Link>
        <br />
        <Link to="/contact-us/form">To form</Link>
        <Outlet />
    </section>
    )
}