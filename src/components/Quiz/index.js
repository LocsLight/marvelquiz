import React from 'react';

const Quiz = (props) => {
    console.log(props.userData.pseudo);
    return (
        <div>
            <h2>Quiz</h2>
            {/*<h2>Pseudo: {props.userData}</h2>*/}  
        </div>
    )
}

export default Quiz;
 