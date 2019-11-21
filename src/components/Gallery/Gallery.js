import React from 'react';

import Picture from './Picture/Picture';

import barber from '../../assets/images/barber.jpeg';
import barber2 from '../../assets/images/barber2.jpeg';

import classes from './Gallery.module.css';

const gallery = () => {
    return (
    	<section className = { classes.Gallery }>
            <Picture image = { barber } />
            <Picture image = { barber2 } />
            <Picture image = { barber } />
    		<Picture image = { barber2 } />
            
            <Picture image = { barber } />
    		<Picture image = { barber2 } />
            <Picture image = { barber } />
    		<Picture image = { barber2 } />
    	</section>
    );
}

export default gallery;
