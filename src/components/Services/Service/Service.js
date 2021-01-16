import React from 'react';

import classes from './Service.module.scss';

const service = ({ name, description, price }) => {
    return (    	
        <div className = { classes.Service }>
            <div className = { classes.Main }>
                <span className = { classes.Name }>{ name }</span>
                <span className = { classes.Price }>{ price }</span>
            </div>
            
            <p className = { classes.Description }>{ description }</p>
        </div>
    );
}

export default service;
