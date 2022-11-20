import React from "react";
import "../stylesheets/LoginPage.scss"
import Banner from "../images/banner.jpg"
function LoginPage() {
    return(
        <div className={"login"}>
            <div className={"login__login-block"}>
                <div className={"login__login-block__login-subblock"}>
                    <p>Zaloguj się</p>
                    <form className="login__login-block__login-subblock__login-form">
                        <div >
                            <label htmlFor="exampleInputEmail1">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1"
                                   placeholder="Password"/>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
                <div className={"banner"}>
                    <img src={Banner} className={"banner-img"}/>
                </div>
            </div>
        </div>
    )
}
export default LoginPage;