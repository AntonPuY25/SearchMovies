import React, {ChangeEvent} from 'react';
import style from './Header.module.css';
import {useDispatch, useSelector} from "react-redux";
import {getAllMoviesSelectors} from "../selectors/selectors";
import {getMoviesThunkCreator, setIsError, setTextSearchingMovies} from "../Store/reducers/moviesReducer";


function Header() {
    const {valueSearching,isError} = useSelector(getAllMoviesSelectors)
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
                   SearchMovies
                </div>
                <div className={style.searchContainer}>
                    <input type="text" id="input" placeholder="Фильмы, сериалы, персоны "
                            value={valueSearching} onChange={changeInputValue}
                          className={isError?style.error:""}
                           />
                    <button onClick={btnSearch}>Search</button>
                </div>

            </div>
        </div>
    );
}

export default Header;