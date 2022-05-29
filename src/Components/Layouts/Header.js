import React , { useContext } from 'react';
import AuthContext from '../../Context/auth';
import {Link,useLocation} from 'react-router-dom'

function Header() {
    const location = useLocation()
    const authContext = useContext(AuthContext);
    let doLogin = () => authContext.dispatch({type:'login_user',payload:{}});
    let doLogout = () => authContext.dispatch({type:'logout_user',payload:{}});

    return (
        <header>
            <div className="navbar navbar-dark bg-dark shadow-sm">
                <div className="container d-flex justify-content-between">

                    <div className='d-flex'>
                        <a href="kiantc.com" className="navbar-brand d-flex align-items-center">
                            <strong>Todo App</strong>
                        </a>
                        <ul className='nav'>
                        <li className='nav-item'>
                                <Link className='nav-link active text-white' to="/" >Home</Link>
                            </li>    
                            <li className='nav-item'>
                                <Link className='nav-link text-white' to={{
                                    pathname : "/about",
                                    search : "?name=heesam",
                                    hash : '#mypage'
                                }} >About</Link>
                            </li>    
                            <li className='nav-item'>
                                <Link className='nav-link text-white' to={`/contact-us`+location.search} >Contact US</Link>
                            </li>    
                        </ul>
                    </div>
                    {
                        ! authContext.authenticated
                            ? <button className="btn btn-sm btn-success" onClick={doLogin}>login</button>
                            : <button className="btn btn-sm btn-danger" onClick={doLogout}>logout</button>
                    }
                </div>
            </div>
        </header>
    )
}


export default Header;