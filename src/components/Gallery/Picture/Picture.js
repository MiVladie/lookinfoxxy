import React from 'react';

import classes from './Picture.module.css';

const picture = ({ image }) => {
    return (
        <div className = { classes.Picture }>
    	    <img className = { classes.Image } src = { image } alt = 'staff' />
        </div>
    );
}

export default picture;
