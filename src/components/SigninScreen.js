import "../pages/signin.css";
import { useCallback, useState, useEffect } from "react";
import axios from "axios";
import { useNavigate,Link } from "react-router-dom";

const SigninScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const [passwordShown, setPasswordShown] = useState(false);

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  const signinHandler = useCallback(() => {
    const option = {
      method: "post",
      url: "http://localhost:3001/user/login",
      // headers: {
      //   "Content-Type": "application/json",
      // },
      data: {
        email,
        password,
      },
    };

    axios(option)
      .then(function (response) {
        const { token } = response.data;

        if (response.status === 200) {
          localStorage.setItem("token", token);
          setIsLoggedIn(true);
        } else {
          setIsLoggedIn(false);
        }
        // console.log(response.data + "  " + isLoggedIn + response.status);
      })
      .catch(function (error) {
        setIsLoggedIn(false);

        //console.log(error + " " + isLoggedIn);
      });
  }, [email, password]);
  useEffect(() => {
    // console.log(isLoggedIn);
    if (isLoggedIn) {
      navigate("/text");
    }
  }, [isLoggedIn, navigate]);
  return (
    <div className="signin-page-cont">
      <div className="signin-cont">
        <h1 className="signin-title">Private English Mentor</h1>
        <div style={{textAlign:'center'}}>
          <h2>Sign in</h2>
          <p style={{marginTop:'-20px'}}>Enter your email and password to sign in</p>
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <div>
            {" "}
            <label>Email</label>{" "}
          </div>
          <div>
            <input
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              placeholder="Enter your email"
              className="input-text"
            ></input>
          </div>
          <div>
            <label>Password</label>
          </div>
          <div>
            <input
              className="input-text"
              type="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              placeholder="Enter your password"
            ></input>
          </div>
          {/*         
        <input id="password" type={passwordShown ? "text" : "password"} />
        <input id="toggle-password" type="checkbox" onClick={togglePassword} />
        <label htmlFor="toggle-password">Show Password</label>

        <button type="submit" onClick={signinHandler}>
          Sign in
        </button> */}
          <div>
            <input type="checkbox" name="loggedin" />
            <label>Keep me logged in</label>
          </div>
          <div>
            <button
              type="submit"
              onClick={signinHandler}
              className="signin-btn"
            >
              Sign in
            </button>
          </div>
          <div style={{textAlign:'center'}}> 
          <p>Don't have an account? <Link  className="signup-link " onClick={() => {
            navigate("/signup")}}> Sign up</Link></p>
          </div>
        </form>
      </div>
    </div>
  );
};
export default SigninScreen;
