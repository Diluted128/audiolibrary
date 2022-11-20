import React, {useState} from "react";
import "../stylesheets/LoginPage.scss"
import Banner from "../images/banner.jpg"
import Cookies from "js-cookie"
import { useNavigate } from "react-router-dom";

function LoginPage() {

    const [warningMessage, setWarningMessage] = useState("");

    const navigate = useNavigate();
    
    const loginUser = (e) => {
        e.preventDefault();

        const inputs = document.getElementsByClassName("form-control");
        var user = {
            login: "",
            password: ""
        }
        console.log(inputs[0].getAttribute('jsonattribute'));
        for (let i = 0; i < inputs.length; i++) {
            user[inputs[i].getAttribute('jsonattribute')] = inputs[i].value
        }

        fetch('http://localhost:3502/login', {
            method: 'POST',
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify(user)
        })
            .then(res => {return res.json()})
            .then(data => {
                    if (data.status === 401) {
                        setWarningMessage("Wrong credentials")
                    } else {
                        Cookies.set('APItoken', data.token);
                        navigate("/home");
                    }
                }
            );
    }

    return(
        <div className={"login"}>
            <div className={"login__login-block"}>
                <div className={"login__login-block__login-subblock"}>
                    <p className={"login__login-block__login-subblock__login-text"}>Zaloguj się</p>
                    <form className="login__login-block__login-subblock__login-form">
                        <div>
                            <label htmlFor="exampleInputEmail1">Email address</label>
                            <input type="text" className="form-control" id="exampleInputEmail1"
                                   aria-describedby="emailHelp" placeholder="Enter email" jsonattribute="login"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1"
                                   placeholder="Password" jsonattribute="password"/>
                        </div>
                        <p className={"login__login-block__login-subblock__warning-message"}>{warningMessage}</p>
                        <button type="submit" onClick={(e) => loginUser(e)} className="btn btn-primary">Submit</button>
                    </form>

                </div>
                <div className={"banner"}>
                    <p>Witaj ponownie</p>
                    <img src={Banner} className={"banner-img"}/>
                </div>
            </div>
        </div>
    )
}
export default LoginPage;