import React, { useState, useEffect } from 'react';

import classes from './Navigation.module.css';

const Navigation = () => {
    const [scrolled, setScrolled] = useState(false);
    const [selected, setSelected] = useState('Home');

    const [expand, setExpand] = useState(false);

    useEffect(() => {
        if(expand && window.screen.width >= 1024)
            setExpand(false);

        if(!expand) document.body.style.overflow = 'visible';
        else document.body.style.overflow = 'hidden';
    });

    const expandMenuHandler = (event) => {
        event.preventDefault();

        setExpand(!expand);
    }
    
    window.addEventListener('scroll', () => {
        setScrolled(window.scrollY > 75);  
        
        let home = document.getElementById('home');
        let services = document.getElementById('services');
        let gallery = document.getElementById('gallery');
        let contact = document.getElementById('contact');

        if(((home.getBoundingClientRect().top <= window.screen.height * 0.5 && 
            home.getBoundingClientRect().top > 0) || 
            (services.getBoundingClientRect().top >= window.screen.height * 0.5 && 
            services.getBoundingClientRect().top < window.screen.height))
            && selected !== 'Home') setSelected('Home');
        else if(((services.getBoundingClientRect().top <= window.screen.height * 0.5 && 
            services.getBoundingClientRect().top > 0) ||
            (gallery.getBoundingClientRect().top >= window.screen.height * 0.5 && 
            gallery.getBoundingClientRect().top < window.screen.height))
            && selected !== 'Services') setSelected('Services');
        else if(((gallery.getBoundingClientRect().top <= window.screen.height * 0.5 && 
            gallery.getBoundingClientRect().top > 0) ||
            (contact.getBoundingClientRect().top >= window.screen.height * 0.5 && 
            contact.getBoundingClientRect().top < window.screen.height)) && 
            selected !== 'Gallery') setSelected('Gallery');
        else if(contact.getBoundingClientRect().top <= window.screen.height * 0.5 && 
            contact.getBoundingClientRect().top > 0 && 
            selected !== 'Contact') setSelected('Contact');
    });

    return (
    	<nav className = { [classes.Navigation, scrolled ? classes.Scrolled : '', expand ? classes.Expand : ''].join(' ') }>
            <div className = { classes.Hide } />

            <a className = { classes.Brand } href = '#home' onClick = { () => setExpand(false) }>
                <div className = { classes.Logo } />
                <div className = { classes.Name } />
            </a>

            <button className = { classes.Menu } onClick = { (event) => expandMenuHandler(event) } />

            <ul className = { classes.Links }>
                <li className = { classes.Link }>
                    <a className = { [classes.Text, selected === 'Home' ? classes.Selected : ''].join(' ') } href = '#home' onClick = { () => setExpand(!expand) }>Home</a>
                    <div className = { classes.Line } />
                </li>
                
                <li className = { classes.Link }>
                    <a className = { [classes.Text, selected === 'Services' ? classes.Selected : ''].join(' ') } href = '#services' onClick = { () => setExpand(!expand) }>Services</a>
                    <div className = { classes.Line } />
                </li>
                
                <li className = { classes.Link }>
                    <a className = { [classes.Text, selected === 'Gallery' ? classes.Selected : ''].join(' ') } href = '#gallery' onClick = { () => setExpand(!expand) }>Gallery</a>
                    <div className = { classes.Line } />
                </li>
                
                <li className = { classes.Link }>
                    <a className = { [classes.Text, selected === 'Contact' ? classes.Selected : ''].join(' ') } href = '#contact' onClick = { () => setExpand(!expand) }>Contact</a>
                    <div className = { classes.Line } />
                </li>
            </ul>

            <a className = { classes.Call } href = 'tel:+441895445264'>Call us</a>
    	</nav>
    );
}

export default Navigation;
