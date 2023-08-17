//// kayıtlı olmayan kulllanıcılar için kayıt sayfası
import React, { useState, useNavigate } from 'react';
import styles from "./auth.module.scss";
import Card from '../../components/card/Card';
import { Link } from 'react-router-dom';
import registerImg from "../../assets/register.png";
import { toast } from "react-toastify";
import { auth } from "../../firebase/config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import Loader from "../../components/loader/Loader"

const Register = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [cPassword, setcPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const navigate = useNavigate()

  const registerUser = (e) => {
    e.preventDefault()
    // console.log(email,password,cPassword)
    if (password !== cPassword) {
      toast.error("Password do not match")
    } else {
      setIsLoading(true)
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user)
          setIsLoading(false)
          toast.success("Registration successfull..")
          navigate("/login")
        })
        .catch((error) => {
          setIsLoading(false)
          toast.error(error.message)
        });
    }
  }
  return (
    <>
      {isLoading && <Loader/>}
      <section className={`container ${styles.auth}`}>
        <Card cardClass={styles.form}>
          <h2>Register</h2>
          <form onSubmit={registerUser}>
            <input type="text" placeholder="Email" required value={email} onChange={(e) => setEmail(e.target.value)}></input>
            <input type="password" placeholder="Password" required value={password} onChange={(e) => setPassword(e.target.value)}></input>
            <input type="password" placeholder="Confirm Password" required value={cPassword} onChange={(e) => setcPassword(e.target.value)}></input>
            <button className="--btn --btn-primary --btn-block">Register</button>
          </form>
          <span className={styles.register}>
            <p>Already have an account ? &nbsp; </p>
            <Link to="/login">Login</Link>
          </span>
        </Card>
        <div className={styles.img}>
          <img src={registerImg} alt="register" width="400"></img>
        </div>
      </section>
    </>
  )
}

export default Register