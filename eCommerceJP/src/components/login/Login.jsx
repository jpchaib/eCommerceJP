import React, { useContext } from "react";
import LoginEmailContext from "../../components/loginContext/LoginEmailContext";
import LoginPasswordContext from "../../components/loginContext/LoginPasswordContext";
import RegisterEmailContext from "../../components/loginContext/RegisterEmailContext";
import RegisterPasswordContext from "../../components/loginContext/RegisterPasswordContext";
import UserContext from "../../components/loginContext/UserContext";
import { auth } from "../../config/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { register, login, logout } from "../../services/collection/pokemonsDb";
import style from "./Login.module.scss";

const Login = () => {
    const [loginEmail, setLoginEmail] = useContext(LoginEmailContext);
    const [loginPassword, setLoginPassword] = useContext(LoginPasswordContext);
    const [registerEmail, setRegisterEmail] = useContext(RegisterEmailContext);
    const [registerPassword, setRegisterPassword] = useContext(RegisterPasswordContext);
    const [user, setUser] = useContext(UserContext);

    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
    });

    const registerHandler = (event) => {
        event.preventDefault();
        register(registerEmail, registerPassword);
    };

    const loginHandler = (event) => {
        event.preventDefault();
        login(loginEmail, loginPassword);
    };

    return (
        <div className={style.Back}>
            <div className={style.Container}>
                <div className={style.Login}>
                    <h3> Login </h3>
                    <input
                        placeholder="Email..."
                        onChange={(event) => {
                            setLoginEmail(event.target.value);
                        }}
                    />
                    <input
                        placeholder="Password..."
                        onChange={(event) => {
                            setLoginPassword(event.target.value);
                        }}
                    />

                    <button className={style.Button} onClick={loginHandler}>
                        {" "}
                        Login
                    </button>
                </div>
                <div className={style.Register}>
                    <h3> Register New User </h3>
                    <input
                        placeholder="Email..."
                        onChange={(event) => {
                            setRegisterEmail(event.target.value);
                        }}
                    />
                    <input
                        placeholder="Password..."
                        onChange={(event) => {
                            setRegisterPassword(event.target.value);
                        }}
                    />

                    <button className={style.Button} onClick={registerHandler}>
                        {" "}
                        Create User
                    </button>
                </div>
                <div className={style.Logout}>
                    <h4> User Logged In: </h4>
                    {user?.email}

                    <button className={style.Button} onClick={logout}>
                        {" "}
                        Sign Out{" "}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;
