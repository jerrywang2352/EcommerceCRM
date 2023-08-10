import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { db, auth } from "../config/Config";
import { doc, setDoc } from "firebase/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth";

const Signup = (props) => {
  // defining state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const signup = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth,email,password).then((cred) => {
        setDoc(doc(db,'signup',cred.user.uid), {
            name: name,
            email: email,
            password: password, 
        }).then (() => {
            setName('');
            setEmail('');
            setPassword('');
            navigate('/login');
        }).catch(err => setError(err.message));
    }).catch(err => setError(err.message));

    // console.log('form submitted');
    // console.log(name,email,password)
    // auth.createUserWithEmailAndPassword(email, password).then((cred) => {
    //     db.collection('SignedUpUsersData').doc(cred.user.uid).set({
    //         Name: name,
    //         Email: email,
    //         Password: password
    //     }).then(() => {
    //         setName('');
    //         setEmail('');
    //         setPassword('');
    //         setError('');
    //         props.history.push('/login');
    //     }).catch(err => setError(err.message));
    // }).catch(err => setError(err.message));
  };

  return (
    <div className="container">
      <br />
      <h2>Sign up</h2>
      <br />
      <form autoComplete="off" className="form-group" onSubmit={signup}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          className="form-control"
          required
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <br />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          className="form-control"
          required
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <br />
        <label htmlFor="Password">Password</label>
        <input
          type="password"
          className="form-control"
          required
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <br />
        <button type="submit" className="btn btn-success btn-md mybtn">
          Submit
        </button>
      </form>
      {error && <span className="error-msg">{error}</span>}
      <br />
      <span>
        Already have an account? Login 
        <Link to="/login"> Here</Link>
      </span>
    </div>
  );
};

export default Signup;
