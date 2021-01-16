import React from 'react';

import classes from './Banner.module.scss';

const banner = () => {
    return (
    	<section className = { classes.Banner } id = 'home'>
            <div className = { classes.Background } />
            <div className = { classes.Welcome }>
                <h1 className = { classes.Unisex }>Lookin Foxxy</h1>
                <h2 className = { classes.Best }>Best Salon in<br/>West London</h2>

                <div className = { classes.Care }>
                    <span className = { classes.Line } />
                    <h3 className = { classes.Text }>Professional Care</h3>
                    <span className = { classes.Line } />
                </div>
            </div>
            <a className = { classes.Scroll } href = '#welcome'>{ null }</a>
    	</section>
    );
}

export default banner;
