import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Navbar() {
    const navigate = useNavigate();
    const [token, setToken] = useState(localStorage.getItem("token"));
    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/signin");
        setToken(null);
        window.location.reload();
    }
    return (
        <nav className="bg-slate-900 text-white px-6 py-4 flex gap-6">
            <h1 className="font-bold text-lg">Evently</h1>
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