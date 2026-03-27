import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function SignInPage() {
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:3001/api/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email,
                password,
            }),
        });
        if (!response.ok) {
            setError("Invalid email or password");
            return;
        }
        const data = await response.json();
        console.log(data);
        localStorage.setItem("token", data.token);
        console.log(data.token);
        navigate("/");
        window.location.reload();

    };

    return (
        <div>
            <h1>SignInPage</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder='example@email.com'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="text"
                    placeholder='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type='submit'>SignIn</button>
            </form>
            {error && <p className='text-red-500'>{error}</p>}
        </div>
    )
}

export default SignInPage