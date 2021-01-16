import React from 'react';

import Review from './Review/Review';

import classes from './Testimonials.module.scss';

const testimonials = () => {
    return (
    	<section className = { classes.Testimonials }>
    		<Review rate = { 5 } text = "Vivamus aliquet sapien a tellus vulputate congue. Proin aliquet orci sapien, rutrum egestas lacus tempor sit amet. Proin nunc arcu." name = 'Maya Page' />
    		<Review rate = { 5 } text = "Donec quis risus consequat, faucibus orci vitae, malesuada metus. Duis blandit metus at libero venenatis, eget elementum tortor venenatis." name = 'Cheryl Hansen' />
    		<Review rate = { 4 } text = "Duis quis ante malesuada, consequat tortor eget, dapibus leo. Nullam imperdiet, erat venenatis pretium convallis, augue augue aliquet dolor, sed vulputate nulla ligula id quam." name = 'Amelia-Rose Hyde' />
    	</section>
    );
}

export default testimonials;
