import React, {useState, useContext} from 'react';
import {Link} from 'react-router-dom';
import {FirebaseContext} from '../Firebase';

const ForgetPassword = props => {

    const firebase = useContext(FirebaseContext)

    const [email, setEmail] = useState('')
    const [success, setSuccess] = useState(null)
    const [error, setError] = useState(null)

    const handleSubmit = e => {
        e.preventDefault()
        firebase.passwordReset(email)
        .then(() => {
            setError(null)
            setSuccess(`Consulter votre email ${email} pour changer le mot de passe`)
            setEmail('')

            setTimeout(() => {
                props.history.push("/login")
            }, 5000)

        })
        .catch(() => {
            setError(error)
            setEmail('')
        })

    }
    const disabled = email === ""
    const successMsg = success && 
    <span 
    style={{
        border: "1px solid green",
        background: "green",
        color: "#ffffff"
    }}>
    {success}
    </span>
    const errorMsg = error && <span>{error.message}</span>   

    return (
        <div className = "signUpLoginBox">
            <div className="slContainer">
                <div className="formBoxLeftForget">
                </div>
                <div className="formBoxRight">
                    <div className="formContent">

                    {successMsg}
                    {errorMsg}

                        <h2>Mot de passe oublié</h2>

                        <form onSubmit={handleSubmit}>

                            <div className="inputBox">
                                <input onChange={e => setEmail(e.target.value)} value={email} type="email" autoComplete="off" required />
                                <label htmlFor="email">Email</label>
                            </div>

                            <button disabled={disabled}>Récupérer</button>
    
                        </form>

                    <div className="linkContainer">
                        <Link to="/login" className="simpleLink">Déjà inscrit? Connectez-vous</Link>
                    </div>
                    </div>
                </div>
            </div>   
        </div>
    );
}

export default ForgetPassword;
