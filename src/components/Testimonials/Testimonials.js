import React from 'react';

import Review from './Review/Review';

import classes from './Testimonials.module.css';

const testimonials = () => {
    return (
    	<section className = { classes.Testimonials }>
    		<Review rate = { 5 } text = "Well I'm from Islington.  Went to this hairdressers Amazing service. Walked out feeling 10 years younger.  My hair felt great" name = 'Jane Coles' />
    		<Review rate = { 5 } text = "I am a very fussy customer but I have been treated wonderful in here ear after having my eyebrows done for the last few years would recommend this place to anybody" name = 'Clare Kalinowska' />
    		<Review rate = { 3 } text = "Staff are really nice I always go there to get my eyebrows and hair done never had any problems" name = 'Keanna Peters' />
    	</section>
    );
}

export default testimonials;
