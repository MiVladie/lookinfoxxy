import React from 'react';

import map from '../../assets/images/map.png';

import classes from './Contact.module.css';

const contact = () => {
    return (
    	<section className = { classes.Contact }>
    		<div className = { classes.Information }>
                <div className = { classes.Info }>
                    <h2 className = { classes.Name }>Contact Information</h2>
                    <div className = { classes.SubInfo }>
                        <p>Phone:
                            <span className = { classes.Gold }> +44 1895 445264</span>
                        </p>
                    </div>
                    <div className = { classes.SubInfo }>
                        <p>Email:
                            <span className = { classes.Gold }> foxyhair@gmail.com</span>
                        </p>
                    </div>
                    <div className = { classes.SubInfo }>
                        <p>Website:
                            <span className = { classes.Gold }> lookinfoxy.co.uk</span>
                        </p>
                    </div>
                </div>

                <div className = { classes.Info }>
                    <h2 className = { classes.Name }>Address Information</h2>
                    <div className = { classes.SubInfo }>
                        <p>Address:
                            <span className = { classes.Grey }> 138 High St, West Drayton<br/>UB7 7BD</span>
                        </p>
                    </div>
                    <div className = { classes.SubInfo }>
                        <p>Open hours:
                            <br/>
                            <span className = { classes.Grey }>Mon-Sat:</span>
                            <span className = { classes.Gold }> 09:00-19:00,</span>
                        
                            <br/>
                            <span className = { classes.Grey }>Sun:</span>
                            <span className = { classes.Gold }> 10:00-18:00</span>
                        </p>
                    </div>
                </div>
            </div>

            <div className = { classes.Map }>
                <img src = { map } alt = 'map' />
            </div>
    	</section>
    );
}

export default contact;
