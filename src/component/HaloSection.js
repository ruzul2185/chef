import React from 'react';
import classes from './HaloSection.module.css';

const HaloSection = (props) => {
    return(
        <React.Fragment>
            <div className={classes.logoItem} style={{width: "100%", display: "flex",flexDirection:"column",alignItems:'center'}}>
                <a href={props.link} className="logo-link" tabIndex="0">
                            <span className="logo-image border-image">
                                    <img className=" lazyloaded"
                                         src={props.image}
                                         data-src={props.image}
                                         alt="" data-image=""/>

                            </span>
                </a>
                <a href={props.link} className={classes.title} tabIndex="0">
                    {props.title}
                </a>
            </div>
        </React.Fragment>
    );
};

export default HaloSection;