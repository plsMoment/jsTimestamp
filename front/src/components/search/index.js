import s from "./s.module.css"
import { SearchOutlined } from '@ant-design/icons';
import { useDetectOutsideClick } from "./useDetectOutsideClick";
import React, { useRef } from "react";
import { CategoryList } from "../category/category-list";


export const SearchBar  = (props) => {
  const dropdownRef = useRef(null);
    const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
    const onClick = () => setIsActive(!isActive);

    return (
      <div>
        <div className={s.searchBarBar} type="search">
          <input  placeholder="Поиск..." {...props} />
          <button onClick={onClick}> <SearchOutlined /> </button>
        </div>

        <div className={isActive ? s.categoryListActive : s.categoryList}>
                <div className={'container'}>
                    <CategoryList/>
                </div>
                {/* <button className={s.firtsBt} onClick={onClick}> бесплатно </button>
                    <button onClick={onClick}> до 1000р </button>
                    <button onClick={onClick}> до 3000р </button>
                    <button className={s.lastBt} onClick={onClick}> 3000р+ </button> */}
            </div>
      </div>
    );
  };
  
export default SearchBar;