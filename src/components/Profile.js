import "../pages/signin.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Profile = () => {
  const [username, setUserName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  //   const getUserDetils = () => {
  //     axios(option)
  //       .then((response) => {
  //         console.log(response);
  //       })
  //       .catch((e) => {
  //         console.log(e);
  //       });
  //   };
  useEffect(() => {
    const option = {
      url: "http://localhost:3001/user/getme",
      // headers: {
      //   "Content-Type": "application/json",
      // },
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    };
    axios(option)
      .then((response) => {
        setUserName(response.data.firstname);
        setSurname(response.data.lastname);
        setEmail(response.data.email);
        setPassword(response.data.password);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  return (
    <div>

<div className="signin-page-cont" >
      <div className="signin-cont">
        <p style={{textAlign:'center'}}>Account Deatails</p>
        <form
           onSubmit={(e) => {
          }}
        >
           <div>
            <label>Name</label>{" "}
          </div>
          <div>
            <input
              onChange={(e) => {
                setUserName(e.target.value);
              }}
              placeholder="Enter your name"
              className="input-text"
            ></input>
          </div>
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
            <label>Age</label>
          </div>
          <div>
            <input
              className="input-text"
              type="text"
              onChange={(e) => {
                // setPassword(e.target.value);
              }}
              placeholder="Enter your age"
            ></input>
          </div>

          <div>
            <label>Native Language</label>
          </div>
          <div>
               <select className="input-text input-select">
                <option value="english"> English</option>
               </select>
          </div>
        
        
          <div style={{paddingBottom:'20px'}}>
            <button
              type="submit"
              className="signin-btn"
            >
               Save Changes
            </button>
          </div>
          <div style={{textAlign:'center',marginTop:'-20px',marginBottom:'20px'}}> <Link className='signup-link profile-cancel-link'> Cancel</Link></div>
          
        </form>
      </div>
    </div>

      {/* <form className="signIn">
        <p>Account Deatails</p>
        <label>First Name</label>
        <input
          value={firstName}
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
        ></input>
        <label> Surname</label>
        <input
          value={surname}
          onChange={(e) => {
            setSurname(e.target.value);
          }}
        ></input>
        <label>Email</label>
        <input
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        ></input>
        <label>Password</label>
        <input></input>

        <button type="submit">Save changes</button>
      </form> */}


    </div>
  );
};
export default Profile;
