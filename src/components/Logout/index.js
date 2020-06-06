import React, {useState, useEffect, useContext} from 'react';
import {FirebaseContext} from '../Firebase';
import ReactToolTip from 'react-tooltip'


const Lougout = (props) => {

    const firebase = useContext(FirebaseContext)

    const [checked, setChecked] = useState(false)

    useEffect(() => {
        if (checked) {
            // console.log("Déconnexion");
            firebase.signoutUser()
        }

    }, [checked, firebase]);

    const handleChage = e => {
        setChecked(e.target.checked)
    }

    return (
        <div className = "logoutContainer">
            <label className="switch">
                <input 
                onChange={handleChage} 
                type = "checkbox"
                checked={checked}
                />
                <span className = "slider round" data-tip="Déconnexion"></span>
            </label>
            <ReactToolTip 
                place="left"
                effect="solid"
            />
        </div>
    );
}

export default Lougout;
