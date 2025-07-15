import { useState } from "react";
import api from "../../api";
import { useNavigate } from "react-router-dom";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../../constants";
import "./Form.css"
import LoadingIndicator from "../LoadingIndicator/LoadingIndicator";
import logo1 from '../../assets/newlogo.png'
import { Link } from "react-router-dom";

function Form({ route, method }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const name = method === "login" ? "Login" : "Register";

    const handleSubmit = async (e) => {
        setLoading(true);
        e.preventDefault();

        try {
            const res = await api.post(route, { username, password })
            if (method === "login") {
                localStorage.setItem(ACCESS_TOKEN, res.data.access);
                localStorage.setItem(REFRESH_TOKEN, res.data.refresh);
                navigate("/")
            } else {
                navigate("/login")
            }
        } catch (error) {
            alert(error)
        } finally {
            setLoading(false)
        }
    };

    return (
        <div className="main-content">

        <div className="slogan-img">
        <img src ={logo1} className='logo1'  alt=""/>
        <div className="slogan1">Adopt Happiness, One Tail at a time.    
        </div>
        </div>

        <form onSubmit={handleSubmit} className="form-container">
            <h1>{name}</h1>
            <input
                className="form-input"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
            />
            <input
                className="form-input"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
            />
            {loading && <LoadingIndicator />}
            <button className="form-button" type="submit">
                {name}
            </button>

            {method === "login" && (
                    <p className="form-link">
                        No account? <Link to="/register">Create an Account</Link>
                    </p>
            )}

            {method === "register" && (
                    <p className="form-link">Already have an account?
                        <Link to="/login"> Log In</Link>
                    </p>
            )}
        </form>
        </div>
    );
}

export default Form