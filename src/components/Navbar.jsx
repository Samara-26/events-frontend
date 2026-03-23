import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Navbar() {
    const navigate = useNavigate();
    const [token, setToken] = useState(localStorage.getItem("token"));
    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/signin");
        setToken(null);
    }
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to='/create-event'>Create Event</Link>
            {!token ? (
                <Link to="/signin">Sign In</Link>
            ) : (
                <button onClick={handleLogout}>Logout</button>
            )}
        </nav>
    );
}

export default Navbar