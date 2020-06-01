import React from 'react';
import batman from "../../images/batman.png";

const centerH2 ={
    textAlign: 'center',
    marginTop: '50px'
}
const centerImg ={
    display: 'center',
    margin: '50px'
}


const ErrorPage = () => {
    return (
        <div className ="quiz-bg">
            <div className="container">
            <h2 style={centerH2}>Oops, cette page n'éxiste pas!</h2>
            <img style={centerImg} src={batman} alt="error page"/>
            </div>
        </div>
    );
}

export default ErrorPage;
