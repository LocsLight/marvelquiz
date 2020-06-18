import React, {Fragment} from 'react';

const ProgressBar = () => {
    return (
        <Fragment>
        <div className="pourcentage">
            <div className="progressPourcentage">Suestion: 1/10</div>  
            <div className="progressPourcentage">10%</div>  
        </div>
    
        <div className="pourcentage">
            <div className="progressPourcentage" style={{width: '10%'}}></div>    
        </div>
        </Fragment>
    );
}

export default ProgressBar;
