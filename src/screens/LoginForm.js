import { PropTypes } from "prop-types";
import React, { useState } from "react"

const LoginForm = ({setToken}) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        if (username === 'admin' && password === 'admin') {
            setToken({"token":"admin"});
        } else {
            alert('Invalid username or password');
        }
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleLogin();
        }
    }

    return (
        <div className="container d-flex justify-content-center align-items-center vh-100 mw-100" style={{
            backgroundImage: "url('/background_login.jpg')",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
        }}>
            <form className="col-2">
                <h3 className="text-center mb-4 text-muted font-weight-bold">Welcome</h3>
                <span className="d-flex justify-content-center align-items-center">
                    <h3>
                        <i className="bi bi-bricks text-danger font-weight-bold"></i>
                    </h3>
                </span>
                <div className="mb-3">
                    <label htmlFor="username" className="form-label text-dark">
                        Username
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label text-dark">
                        Password
                    </label>
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button
                    type="button"
                    className="btn btn-primary"
                    onClick={handleLogin}
                    onKeyPress={handleKeyPress}
                >
                   Sign-in
                </button>
            </form>
        </div>
    );
};

LoginForm.prototype = {
    setToken: PropTypes.func.isRequired,
};

export default LoginForm;