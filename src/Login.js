import React,{useState} from "react";
import "./Login.css";
import { auth } from "./firebase";
import {login} from "./features/userSlice"
import { useDispatch } from "react-redux";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [ProfilePic, setProfilePic] = useState("");
  const dispatch = useDispatch();

  const loginToApp = (e) => {
    e.preventDefault();

    auth.signInWithEmailAndPassword(email,password)
    .then(userAuth=>{
        dispatch(login({
            email: userAuth.user.email,
            uid:userAuth.user.uid,
            displayName:userAuth.user.displayName,
            photoURL:userAuth.user.photoURL
        }))
    }).catch(error=> alert(error));
  };
  const register = () => {
      if(!name){
          return alert("please enter a full name")
      }
      auth.createUserWithEmailAndPassword(email,password)
      .then((userAuth)=>{
          userAuth.user.updateProfile({
              displayName:name,
              photoURL: ProfilePic
          })
          .then(()=>{
              dispatch(login({
                  email: userAuth.user.email,
                  uid:userAuth.user.uid,
                  displayName:name,
                  photoURL:ProfilePic
              }))
          })
      }).catch(error => alert(error));
  };
  return (
    <div className="login">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/1280px-LinkedIn_Logo.svg.png"
        alt=""
      />
      <form action="">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Full Name (required if regestering)"
        />
        <input
          type="text"
          value={ProfilePic}
          placeholder="Profile pic URL(optional)"
          onChange={(e) => setProfilePic(e.target.value)}
        />
        <input
          type="email"
          value={email}
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          value={password}
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" onClick={loginToApp}>
          Sign In
        </button>
      </form>

      <p>
        Not a member?{" "}
        <span className="login__register" onClick={register}>
          Register Now
        </span>
      </p>
    </div>
  );
}

export default Login;
