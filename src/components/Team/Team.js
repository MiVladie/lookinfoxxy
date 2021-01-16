import React from 'react';

import team1 from '../../assets/images/team1.jpeg';
import team2 from '../../assets/images/team2.jpg';
import team3 from '../../assets/images/team3.jpg';
import team4 from '../../assets/images/team4.jpg';

import Member from './Member/Member';

import classes from './Team.module.scss';

const team = () => {
    return (
    	<section className = { classes.Team }>
            <Member name = 'Nicole Simon' position = 'Hair Stylist' image = { team1 } />
            <Member name = 'Nicole Simon' position = 'Hair Stylist' image = { team2 } />
    		<Member name = 'Nicole Simon' position = 'Hair Stylist' image = { team3 } />
            <Member name = 'Nicole Simon' position = 'Hair Stylist' image = { team4 } />
    	</section>
    );
}

export default team;
