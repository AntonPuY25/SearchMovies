import React, {ChangeEvent} from 'react';
import style from './Header.module.css';
import {useDispatch, useSelector} from "react-redux";
import { getMovieSelectors} from "../selectors/selectors";
import {getMoviesThunkCreator, setIsError, setTextSearchingMovies} from "../Store/reducers/moviesReducer";
import search from '../img/search.png'
import film from '../img/film.png'


function Header() {
    const {valueSearching,isError} = useSelector(getMovieSelectors)
    const dispatch = useDispatch()
    const changeInputValue = (event: ChangeEvent<HTMLInputElement>) => {
        dispatch(setTextSearchingMovies(event.currentTarget.value))
    }
    const btnSearch = () => {
        valueSearching===""? dispatch(setIsError(true))
            :dispatch(getMoviesThunkCreator());
    }
    return (
        <div className={style.headerBlock}>
            <div className={style.headerContainer}>
                <div className={style.logoContainer}>
                    <div className={style.Container}>
                    <div className={style.logo}>
                        <img src={film} alt="film"/>
                    </div>
                    <div className={style.logoText}>
                        <h2>SearchMovies</h2>
                    </div>
                    </div>
                </div>
                <div className={style.searchContainer}>
                    <div className={style.container}>
                        <div className={style.searchInput}>
                            <input type="text" id="input" placeholder="Фильмы, сериалы "
                            value={valueSearching} onChange={changeInputValue}
                             className={isError?style.error:""}/>
                         </div>
                         <div className={style.searchButton}>
                         <button onClick={btnSearch}><img src={search} alt="search"/></button>
                         </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;