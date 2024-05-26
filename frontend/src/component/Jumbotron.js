import React from 'react';
import styles from './Jumbotron.module.css';

const Jumbotron = () => {
    return(
        <React.Fragment>
            <div className={styles.jumbotron}>
                <a href="//www.wonderchef.com">
                    <img src="//www.wonderchef.com/cdn/shop/files/fin_d.jpg?v=1709626739" alt="Wonderchef Promotion" />
                </a>
            </div>
        </React.Fragment>
    );
};

export default Jumbotron;