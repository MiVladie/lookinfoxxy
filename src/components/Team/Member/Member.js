import React from 'react';

import classes from './Member.module.scss';

const member = ({ name, position, image }) => {
    return (
    	<div className = { classes.Member }>
    		<div className = { classes.Image }><img src = { image } alt = { name } /></div>
            <div className = { classes.Info }>
                <h1 className = { classes.Name }>{ name }</h1>
                <h2 className = { classes.Position }>{ position }</h2>
            </div>
    	</div>
    );
}

export default member;
