import s from './s.module.scss';
import { CaretDownOutlined } from '@ant-design/icons';
import { CaretUpOutlined } from '@ant-design/icons';
import React, { useRef } from "react";
import { useDetectOutsideClick } from "./useDetectOutsideClick";
import { CategoryList } from './category-list';


export const Category = () => {
    const dropdownRef = useRef(null);
    const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
    const onClick = () => setIsActive(!isActive);
    return (
        <div>
            <div className={s.price}>

                <button className={s.priceButton} onClick={onClick}>
                    <div className={s.textPrice}>Цена </div>
                    <div className={s.iconPrice}> {isActive ? <CaretUpOutlined /> : <CaretDownOutlined />}</div>
                </button>



            </div>
        </div>

    );
};