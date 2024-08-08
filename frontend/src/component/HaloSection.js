import React from 'react';
import { useNavigate } from 'react-router-dom';
import classes from './HaloSection.module.css';

const HaloSection = (props) => {
    const navigate = useNavigate();

    const handleViewAllClick = () => {
        navigate(props.link, { state: { categoryList: props.categoryList } });
    };

    return (
        <div className={classes.logoItem} style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: 'center' }}>
            {props.categoryList.length === 0 ? (
                <p className={classes.noDataMessage}>
                    No data found. Please add some data in <strong className={classes.uppercase}>{props.title}</strong>.
                </p>
            ) : (
                <>
                    <a onClick={handleViewAllClick} className="logo-link" tabIndex="0">
                        <span className="logo-image border-image">
                            <img className="lazyloaded"
                                src={props.image}
                                data-src={props.image}
                                alt="" data-image="" />
                        </span>
                    </a>
                    <a onClick={handleViewAllClick} className={classes.title} tabIndex="0">
                        {props.title}
                    </a>
                </>
            )}
        </div>
    );
};

export default HaloSection;
