import React, { useState } from 'react';

import Service from './Service/Service';

import classes from './Services.module.css';

const Services = () => {
    const [expanded, setExpanded] = useState(false);

    return (
    	<section className = { classes.Services }>
            <Service name = "Men's Haircut" description = 'Cras dignissim metus ac odio faucibus, ac gravida lectus pretium' price = '£12.00' />
            <Service name = "Men's Haircut" description = 'Cras dignissim metus ac odio faucibus, ac gravida lectus pretium' price = '£12.00' />
            <Service name = "Men's Haircut" description = 'Cras dignissim metus ac odio faucibus, ac gravida lectus pretium' price = '£12.00' />
            <Service name = "Men's Haircut" description = 'Cras dignissim metus ac odio faucibus, ac gravida lectus pretium' price = '£12.00' />
            <Service name = "Men's Haircut" description = 'Cras dignissim metus ac odio faucibus, ac gravida lectus pretium' price = '£12.00' />
            <Service name = "Men's Haircut" description = 'Cras dignissim metus ac odio faucibus, ac gravida lectus pretium' price = '£12.00' />
            <Service name = "Men's Haircut" description = 'Cras dignissim metus ac odio faucibus, ac gravida lectus pretium' price = '£12.00' />
            <Service name = "Men's Haircut" description = 'Cras dignissim metus ac odio faucibus, ac gravida lectus pretium' price = '£12.00' />

            { 
                expanded && 
                <React.Fragment>
                    <Service name = "Men's Haircut" description = 'Cras dignissim metus ac odio faucibus, ac gravida lectus pretium' price = '£12.00' />
                    <Service name = "Men's Haircut" description = 'Cras dignissim metus ac odio faucibus, ac gravida lectus pretium' price = '£12.00' />
                    <Service name = "Men's Haircut" description = 'Cras dignissim metus ac odio faucibus, ac gravida lectus pretium' price = '£12.00' />
                    <Service name = "Men's Haircut" description = 'Cras dignissim metus ac odio faucibus, ac gravida lectus pretium' price = '£12.00' />
                    <Service name = "Men's Haircut" description = 'Cras dignissim metus ac odio faucibus, ac gravida lectus pretium' price = '£12.00' />
                    <Service name = "Men's Haircut" description = 'Cras dignissim metus ac odio faucibus, ac gravida lectus pretium' price = '£12.00' />
                    <Service name = "Men's Haircut" description = 'Cras dignissim metus ac odio faucibus, ac gravida lectus pretium' price = '£12.00' />
                    <Service name = "Men's Haircut" description = 'Cras dignissim metus ac odio faucibus, ac gravida lectus pretium' price = '£12.00' />
                </React.Fragment>
            }

            <a className = { [classes.Expand, expanded ? classes.Collapse : ''].join(' ') } onClick = { () => setExpanded(!expanded) }>
                <p>{ expanded ? 'Less' : 'More' }</p>
            </a>

    	</section>
    );
}

export default Services;
