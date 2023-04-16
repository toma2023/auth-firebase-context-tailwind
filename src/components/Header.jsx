import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProviders';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then(() => {

            })
            .catch(error => {
                console.log(error);
            })
    }


    return (
        <div>
            <div className="navbar bg-primary text-primary-content">
                <a className="btn btn-ghost normal-case text-xl">Auth Master</a>
                <Link to="/" className='btn btn-ghost normal-case text-xl'>Home</Link>
                
                <Link to="/orders" className='btn btn-ghost normal-case text-xl'>Orders</Link>
                {user && <Link to="/profile" className='btn btn-ghost normal-case text-xl'>Profile</Link>}

                <Link className="btn btn-ghost normal-case text-xl" to="/login">Login</Link>
                <Link className="btn btn-ghost normal-case text-xl" to="/register">Register</Link>
                {
                    user ? <>
                        <span>{user.email}</span>
                        <button onClick={handleLogOut} className="btn btn-xs">Sign out</button>
                    </>
                        : <Link to="/login">Log in</Link>
                }

            </div>
        </div>
    );
};

export default Header;