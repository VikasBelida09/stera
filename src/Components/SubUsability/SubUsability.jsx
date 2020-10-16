import React from 'react'
import classes from './SubUsability.module.css'
function SubUsability({img,title,description}) {
    return (
        <div className={classes.subUsability}>
            <div className={classes.image}>
                <img src={img} alt={title}/>
            </div>
            <div className={classes.descriptionContainer}>
                <h5>{title}</h5>
                <p>{description}</p>    
            </div>
        </div>
    )
}

export default SubUsability
