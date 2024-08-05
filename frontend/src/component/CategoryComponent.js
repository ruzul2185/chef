import React from 'react';
import styles from './CategoryComponent.module.css';
import airfryer from '../asset/airfryer.png'
import cookers from '../asset/cookers.png'
import cooktops from '../asset/cooktops.png'
import induction from '../asset/induction.png'
import cookware from '../asset/category_cookware.png'
import cooking from '../asset/cooking.png'
import kitchen from '../asset/kitchen.png'
import breakfast from '../asset/breakfast4.png'

const CategoryComponent = () => {
    const items = [
        {
            id: 1,
            title: "AIR FRYER",
            image: airfryer
        },
        {
            id: 2,
            title: "COOKERS",
            image: cookers
        },
        {
            id: 3,
            title: "COOKTOPS",
            image: cooktops
        },
        {
            id: 4,
            title: "INDUCTION",
            image: induction
        },
        {
            id: 5,
            title: "COOKWARE",
            image: cookware
        },
        {
            id: 6,
            title: "COOKING APPLIANCE",
            image: cooking
        },
        {
            id: 7,
            title: "KITCHEN APPLIANCE",
            image: kitchen
        },
        {
            id: 8,
            title: "BREAKFAST & SNACKS",
            image: breakfast
        },
    ];

    return (
        <div>
            <div className={styles.listContainer}>
                PRODUCT CATEGORIES
            </div>
            <div className={styles.gridContainer}>
                {items.map((item) => (
                    <div key={item.id} className={styles.card}>
                        <div className={styles.imageContainer}>
                            <img src={item.image} alt={item.title} className={styles.image} />
                        </div>
                        <div style={{paddingTop:"10px",paddingBottom:"10px"}}/>
                        <div className={styles.titleContainer}>
                            <div className={styles.title}>{item.title}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CategoryComponent;
