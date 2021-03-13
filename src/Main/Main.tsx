import React from 'react';
import style from './Main.module.css';
import {useSelector} from "react-redux";
import {getMovieSelectors} from "../selectors/selectors";


const Main = () => {
    const state = useSelector(getMovieSelectors)
    return (
        <div className={style.mainBlock}>
            <div className={style.mainContainer}>
                <div className={style.mainInfo}>
                <div className={style.mainImg}>
                     <img alt={'Poster'} src={state.movies.Poster}/>
                </div>
                <div className={style.mainText}>
                    <h1>{state.movies.Title}</h1>
                    <div className={style.textBlock}>
                        <div className={style.name}>
                            Год производства
                        </div>
                        <div className={style.text}>
                            {state.movies.Year}
                        </div>
                    </div>
                    <div className={style.textBlock}>
                        <div className={style.name}>
                            Страна
                        </div>
                        <div className={style.text}>
                            {state.movies.Country}
                        </div>
                    </div>
                    <div className={style.textBlock}>
                        <div className={style.name}>
                            Жанр
                        </div>
                        <div className={style.text}>
                            {state.movies.Genre}
                        </div>
                    </div>
                    <div className={style.textBlock}>
                        <div className={style.name}>
                            Режиссер
                        </div>
                        <div className={style.text}>
                            {state.movies.Director}
                        </div>
                    </div>
                    <div className={style.textBlock}>
                        <div className={style.name}>
                            В главных ролях
                        </div>
                        <div className={style.text}>
                            {state.movies.Actors}
                        </div>
                    </div>
                    <div className={style.textBlock}>
                        <div className={style.name}>
                            Бюджет
                        </div>
                        <div className={style.text}>
                            {state.movies.BoxOffice}
                        </div>
                    </div>
                    <div className={style.textBlock}>
                        <div className={style.name}>
                            Сборы в мире
                        </div>
                        <div className={style.text}>
                            +$1 526 700 000=$2 127 488 188
                        </div>
                    </div>
                    <div className={style.textBlock}>
                        <div className={style.name}>
                            Возвраст
                        </div>
                        <div className={style.text}>
                            12+
                        </div>
                    </div>
                    <div className={style.textBlock}>
                        <div className={style.name}>
                            Время
                        </div>
                        <div className={style.text}>
                            {state.movies.Runtime}
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
}
export default Main;