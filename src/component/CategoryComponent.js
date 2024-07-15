import React from 'react';
import styles from './CategoryComponent.module.css';

const CategoryComponent = () => {
    const items = [
        {
            id: 1,
            title: "AIR FRYER",
            image: "//www.wonderchef.com/cdn/shop/files/Nutri-blend_1s_b1144304-7f2a-4365-9db3-e0c15836e4b0.jpg?v=1709626811"
        },
        {
            id: 2,
            title: "COOKERS",
            image: "//www.wonderchef.com/cdn/shop/files/Nutri-blend_1s_b1144304-7f2a-4365-9db3-e0c15836e4b0.jpg?v=1709626811"
        },
        {
            id: 3,
            title: "COOKTOPS",
            image: "//www.wonderchef.com/cdn/shop/files/Nutri-blend_1s_b1144304-7f2a-4365-9db3-e0c15836e4b0.jpg?v=1709626811"
        },
        {
            id: 4,
            title: "INDUCTION",
            image: "//www.wonderchef.com/cdn/shop/files/Nutri-blend_1s_b1144304-7f2a-4365-9db3-e0c15836e4b0.jpg?v=1709626811"
        },
        {
            id: 5,
            title: "COOKWARE",
            image: "//www.wonderchef.com/cdn/shop/files/Nutri-blend_1s_b1144304-7f2a-4365-9db3-e0c15836e4b0.jpg?v=1709626811"
        },
        {
            id: 6,
            title: "COOKING APPLIANCE",
            image: "//www.wonderchef.com/cdn/shop/files/Nutri-blend_1s_b1144304-7f2a-4365-9db3-e0c15836e4b0.jpg?v=1709626811"
        },
        {
            id: 7,
            title: "KITCHEN APPLIANCE",
            image: "//www.wonderchef.com/cdn/shop/files/Nutri-blend_1s_b1144304-7f2a-4365-9db3-e0c15836e4b0.jpg?v=1709626811"
        },
        {
            id: 8,
            title: "BREAKFAST & SNACKS",
            image: "//www.wonderchef.com/cdn/shop/files/Nutri-blend_1s_b1144304-7f2a-4365-9db3-e0c15836e4b0.jpg?v=1709626811"
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
