import React from 'react';

import marker from '../../assets/icons/address.png';
import phone from '../../assets/icons/phone.png';
import mail from '../../assets/icons/email.png';

import classes from './Footer.module.scss';

const footer = () => {
    return (
    	<footer className = { classes.Footer }>
            <div className = { classes.Main }>
                <div className = { classes.About }>
                    <h1 className = { classes.Name }>Lookin Foxxy</h1>
                    <p className = { classes.Description }>Cras dignissim metus ac odio faucibus, ac gravida lectus pretium. Mauris maximus risus ac urna ullamcorper ullamcorper eget et justo.</p>
                    <ul className = { classes.Social }>
                        <li className = { classes.Link }><a href = 'https://letscomit.com'><p>f</p></a></li>
                        <li className = { classes.Link }><a href = 'https://letscomit.com'><p>t</p></a></li>
                        <li className = { classes.Link }><a href = 'https://letscomit.com'><p>i</p></a></li>
                    </ul>
                </div>

                <div className = { classes.Links }>
                    <h1 className = { classes.Name }>Links</h1>
                    <ul className = { classes.Pages }>
                        <li className = { classes.Page }><a href = '#home'>Home</a></li>
                        <li className = { classes.Page }><a href = '#services'>Services</a></li>
                        <li className = { classes.Page }><a href = '#gallery'>Gallery</a></li>
                        <li className = { classes.Page }><a href = '#contact'>Contact</a></li>
                    </ul>
                </div>

                <div className = { classes.Question }>
                    <h1 className = { classes.Name }>Have questions?</h1>
                    <div className = { classes.Info }>
                        <img className = { classes.Icon } src = { marker } alt = 'marker' />
                        <p className = { classes.Text }>Westminster, London<br/>SW1A 0AA</p>
                    </div>
                    <div className = { classes.Info }>
                        <img className = { classes.Icon } src = { phone } alt = 'phone' />
                        <p className = { classes.Text }>+44 7342 216193</p>
                    </div>
                    <div className = { classes.Info }>
                        <img className = { classes.Icon } src = { mail } alt = 'mail' />
                        <p className = { classes.Text }>letscomit@gmail.com</p>
                    </div>
                </div>
            </div>

            <p className = { classes.Copyright }>Copyright Lookin Foxxy &copy;{ new Date().getFullYear() } All rights reserved</p>
    	</footer>
    );
}

export default footer;
