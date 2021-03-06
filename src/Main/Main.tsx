import React from 'react';
import style from './Main.module.css';
import {useSelector} from "react-redux";
import {getMovieSelectors} from "../selectors/selectors";


const Main = () => {
    const state = useSelector(getMovieSelectors)

    return (
        <div className={style.mainBlock}>
            {
                state.isHaveAMovie ?
                    <div className={style.mainContainer}>
                        <div className={style.mainInfo}>
                            <div className={style.mainImg}>
                                <img alt={'Poster'} src={state.movies.Poster}/>
                            </div>
                            <div className={style.mainText}>
                                <h1>{state.movies.Title}</h1>
                                <div className={style.textBlock}>
                                    <div className={style.name}>
                                        Production year
                                    </div>
                                    <div className={style.text}>
                                        {state.movies.Year}
                                    </div>
                                </div>
                                <div className={style.textBlock}>
                                    <div className={style.name}>
                                        The country
                                    </div>
                                    <div className={style.text}>
                                        {state.movies.Country}
                                    </div>
                                </div>
                                <div className={style.textBlock}>
                                    <div className={style.name}>
                                        Genre
                                    </div>
                                    <div className={style.text}>
                                        {state.movies.Genre}
                                    </div>
                                </div>
                                <div className={style.textBlock}>
                                    <div className={style.name}>
                                        Producer
                                    </div>
                                    <div className={style.text}>
                                        {state.movies.Director}
                                    </div>
                                </div>
                                <div className={style.textBlock}>
                                    <div className={style.name}>
                                        Starring
                                    </div>
                                    <div className={style.text}>
                                        {state.movies.Actors}
                                    </div>
                                </div>
                                <div className={style.textBlock}>
                                    <div className={style.name}>
                                        Awards
                                    </div>
                                    <div className={style.text}>
                                        {state.movies.Awards}
                                    </div>
                                </div>
                                <div className={style.textBlock}>
                                    <div className={style.name}>
                                        Rating
                                    </div>
                                    <div className={style.text}>
                                        {state.movies.imdbRating}
                                    </div>
                                </div>
                                <div className={style.textBlock}>
                                    <div className={style.name}>
                                        Time
                                    </div>
                                    <div className={style.text}>
                                        {state.movies.Runtime}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={style.mainDescription}>
                            <div className={style.descriptionText}>
                                <h2>Description</h2>
                             <span> {state.movies.Plot}</span>
                            </div>
                        </div>
                    </div> :
                    "Search"

            }
        </div>
    );
}
export default Main;