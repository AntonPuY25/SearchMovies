import React, {ChangeEvent} from 'react';
import style from './Header.module.css';
import {useDispatch, useSelector} from "react-redux";
import {getAllMoviesSelectors} from "../selectors/selectors";
import {getMoviesThunkCreator, setTextSearchingMovies} from "../Store/reducers/moviesReducer";


function Header() {
    const {valueSearching} = useSelector(getAllMoviesSelectors)
    const dispatch = useDispatch()
    const changeInputValue = (event: ChangeEvent<HTMLInputElement>) => {
        dispatch(setTextSearchingMovies(event.currentTarget.value))
    }
    const btnSearch = () => {

        valueSearching===""? alert('Error')
            :dispatch(getMoviesThunkCreator());
    }
    return (
        <div className={style.headerBlock}>
            <div className={style.headerContainer}>
                <div className={style.logoContainer}>

                </div>
                <div className={style.searchContainer}>
                    <input type="text" placeholder="Фильмы, сериалы, персоны "
                           value={valueSearching} onChange={changeInputValue}
                    />
                    <button onClick={btnSearch}>Search</button>
                </div>

            </div>
        </div>
    );
}

export default Header;