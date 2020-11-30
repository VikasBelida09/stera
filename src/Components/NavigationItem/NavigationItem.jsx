import React from 'react'
import { Link } from 'react-router-dom'
import classes from './NavigationItem.module.css'
function NavigationItem({name,url,isLink}) {
    return (
        <div className={classes.navItem}>
            {!isLink?(<a href={url} className={classes.linkStyle}>{name}</a>):(
                <Link to={url} className={classes.linkStyle}>{name}</Link>
            )}
            <div className={classes.navItemBorder}></div>
        </div>
    )
}

export default NavigationItem
