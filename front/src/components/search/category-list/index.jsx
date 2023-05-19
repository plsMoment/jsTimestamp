import s from './s.module.scss';
import React, { useRef } from "react";
import {useEffect, useState } from 'react';
import axios from 'axios';
import serverHost from '../../../variables';


export const CategoryList = () => {
    const [categories, setCategories] = useState('');

    useEffect(() => {
        getCategories();
    }, []);

    async function getCategories() {
        const response = await axios.get(`http://${serverHost}/categories`);
        console.log('писька');
        console.log(response.data.data);
        setCategories(response.data.data);
    }


    return (
        <div className={s.categoryList}>
            <div className={s.header}>События по темам</div>
            <div className={s.content}>
                {categories.map((category) => <div className={'col-4 ' + s.categoryListItem}>{category.name_category}</div>)}
            </div>
        </div>
    );
};