import React from 'react';

import Map from './Map/Map';

import classes from './Contact.module.scss';

const contact = () => {
    return (
    	<section className = { classes.Contact }>
    		<div className = { classes.Information }>
                <div className = { classes.Info }>
                    <h2 className = { classes.Name }>Contact Information</h2>
                    <div className = { classes.SubInfo }>
                        <p>Phone:
                            <span className = { classes.Gold }> +44 7342 216193</span>
                        </p>
                    </div>
                    <div className = { classes.SubInfo }>
                        <p>Email:
                            <span className = { classes.Gold }> letscomit@gmail.com</span>
                        </p>
                    </div>
                    <div className = { classes.SubInfo }>
                        <p>Website:
                            <span className = { classes.Gold }> letscomit.com</span>
                        </p>
                    </div>
                </div>

                <div className = { classes.Info }>
                    <h2 className = { classes.Name }>Address Information</h2>
                    <div className = { classes.SubInfo }>
                        <p>Address:
                            <span className = { classes.Grey }> Westminster, London<br/>SW1A 0AA</span>
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
                <Map location = {{ lat: 51.5007292, lng: -0.1246254 }} zoom = { 15 } />
            </div>
    	</section>
    );
}

export default contact;
