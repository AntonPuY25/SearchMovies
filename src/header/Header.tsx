import React from 'react';
import style from './Header.module.css';


function Header() {
    return (
        <div className={style.headerBlock}>
            <div className={style.headerContainer}>
                <div className={style.logoContainer}>

                </div>
                <div className={style.searchContainer}>
                   <input type="text" placeholder="Фильмы, сериалы, персоны "/>
                </div>
            </div>
        </div>
    );
}

export default Header;