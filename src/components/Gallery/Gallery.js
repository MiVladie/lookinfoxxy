import React from 'react';

import Picture from './Picture/Picture';

import gallery1 from '../../assets/images/gallery1.jpeg';
import gallery2 from '../../assets/images/gallery2.jpg';
import gallery3 from '../../assets/images/gallery3.jpg';
import gallery4 from '../../assets/images/gallery4.jpg';
import gallery5 from '../../assets/images/gallery5.jpg';
import gallery6 from '../../assets/images/gallery6.jpg';
import gallery7 from '../../assets/images/gallery7.jpeg';
import gallery8 from '../../assets/images/gallery8.jpg';

import classes from './Gallery.module.scss';

const gallery = () => {
    return (
    	<section className = { classes.Gallery }>
            <Picture image = { gallery1 } />
            <Picture image = { gallery2 } />
            <Picture image = { gallery3 } />
    		<Picture image = { gallery4 } />
            
            <Picture image = { gallery5 } />
    		<Picture image = { gallery6 } />
            <Picture image = { gallery7 } />
    		<Picture image = { gallery8 } />
    	</section>
    );
}

export default gallery;
