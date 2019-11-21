import React from 'react';

import nicole from '../../assets/images/portrait.jpeg';

import Member from './Member/Member';

import classes from './Team.module.css';

const team = () => {
    return (
    	<section className = { classes.Team }>
            <Member name = 'Nicole Simon' position = 'Hair Stylist' image = { nicole } />
            <Member name = 'Nicole Simon' position = 'Hair Stylist' image = { nicole } />
    		<Member name = 'Nicole Simon' position = 'Hair Stylist' image = { nicole } />
            <Member name = 'Nicole Simon' position = 'Hair Stylist' image = { nicole } />
    	</section>
    );
}

export default team;
