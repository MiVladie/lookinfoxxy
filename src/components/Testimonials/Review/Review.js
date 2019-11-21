import React from 'react';

import star from '../../../assets/icons/star.png';

import classes from './Review.module.css';

const review = ({ rate, text, name }) => {  
    let stars = [...new Array(rate)].map((_, index) => 
        <img className = { classes.Star } src = { star } alt = '' key = { index } />
    );

    return (
    	<div className = { classes.Review }>
    		<div className = { classes.Rating }>
                <div className = { classes.Stars }>{ stars }</div>
                <span className = { classes.Line } />
            </div>
            <p className = { classes.Text }>{ text }</p>
            <h3 className = { classes.Name }>{ name }</h3>
    	</div>
    );
}

export default review;
