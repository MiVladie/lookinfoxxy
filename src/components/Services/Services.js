import React, { useState } from 'react';

import Service from './Service/Service';

import classes from './Services.module.scss';

const Services = () => {
    const [expanded, setExpanded] = useState(false);

    const expandList = (event) => {
        event.preventDefault();

        setExpanded(!expanded);
    }

    return (
    	<section className = { classes.Services }>
            <Service name = "Wash & Blow Dry" description = 'Cras dignissim metus ac odio faucibus, ac gravida lectus pretium' price = '£12.00' />
            <Service name = "Dry Cut" description = 'Cras dignissim metus ac odio faucibus, ac gravida lectus pretium' price = '£15.00' />
            <Service name = "Men's Haircut" description = 'Cras dignissim metus ac odio faucibus, ac gravida lectus pretium' price = '£10.00' />
            <Service name = "Kid's Haircut" description = 'Cras dignissim metus ac odio faucibus, ac gravida lectus pretium' price = '£5.00' />
            <Service name = "Face Polishing" description = 'Cras dignissim metus ac odio faucibus, ac gravida lectus pretium' price = '£10.00' />
            <Service name = "Mini Facial" description = 'Cras dignissim metus ac odio faucibus, ac gravida lectus pretium' price = '£15.00' />
            <Service name = "Waxing" description = 'Cras dignissim metus ac odio faucibus, ac gravida lectus pretium' price = '£25.00' />
            <Service name = "Full Manicure" description = 'Cras dignissim metus ac odio faucibus, ac gravida lectus pretium' price = '£12.00' />

            { 
                expanded && 
                <React.Fragment>
                    <Service name = "Wash & Blow Dry" description = 'Cras dignissim metus ac odio faucibus, ac gravida lectus pretium' price = '£12.00' />
                    <Service name = "Dry Cut" description = 'Cras dignissim metus ac odio faucibus, ac gravida lectus pretium' price = '£15.00' />
                    <Service name = "Men's Haircut" description = 'Cras dignissim metus ac odio faucibus, ac gravida lectus pretium' price = '£10.00' />
                    <Service name = "Kid's Haircut" description = 'Cras dignissim metus ac odio faucibus, ac gravida lectus pretium' price = '£5.00' />
                    <Service name = "Face Polishing" description = 'Cras dignissim metus ac odio faucibus, ac gravida lectus pretium' price = '£10.00' />
                    <Service name = "Mini Facial" description = 'Cras dignissim metus ac odio faucibus, ac gravida lectus pretium' price = '£15.00' />
                    <Service name = "Waxing" description = 'Cras dignissim metus ac odio faucibus, ac gravida lectus pretium' price = '£25.00' />
                    <Service name = "Full Manicure" description = 'Cras dignissim metus ac odio faucibus, ac gravida lectus pretium' price = '£12.00' />
                </React.Fragment>
            }

            <button className = { [classes.Expand, expanded ? classes.Collapse : ''].join(' ') } onClick = { expandList }>
                <p>{ expanded ? 'Less' : 'More' }</p>
            </button>

    	</section>
    );
}

export default Services;
