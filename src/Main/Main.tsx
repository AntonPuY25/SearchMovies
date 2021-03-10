import React from 'react';
import style from './Main.module.css';


const Main = () => {
    return (
        <div className={style.mainBlock}>
            <div className={style.mainContainer}>
                <div className={style.mainInfo}>
                <div className={style.mainImg}>
                     <img src="https://avatars.mds.yandex.net/get-kinopoisk-image/1773646/96d93e3a-fdbf-4b6f-b02d-2fc9c2648a18/300x450"/>
                </div>
                <div className={style.mainText}>
                    <h1>Титаник</h1>
                    <div className={style.textBlock}>
                        <div className={style.name}>
                            Год производства
                        </div>
                        <div className={style.text}>
                            1997
                        </div>
                    </div>
                    <div className={style.textBlock}>
                        <div className={style.name}>
                            Страна
                        </div>
                        <div className={style.text}>
                            США, Мексика, Австралия, Канада
                        </div>
                    </div>
                    <div className={style.textBlock}>
                        <div className={style.name}>
                            Жанр
                        </div>
                        <div className={style.text}>
                            мелодрама, история, триллер, драма
                        </div>
                    </div>
                    <div className={style.textBlock}>
                        <div className={style.name}>
                            Режиссер
                        </div>
                        <div className={style.text}>
                            Джейс Кэмерон
                        </div>
                    </div>
                    <div className={style.textBlock}>
                        <div className={style.name}>
                            В главных ролях
                        </div>
                        <div className={style.text}>
                            Леонардо Ди Каприо, Кейт Уинслет, Билли Зейн, Кэти Бэйтс, Фрэнсис Фишер, Глория Стюарт, Билл Пэкстон, Бернард Хилл, Девид Уорнер, Виктор Гарбер
                        </div>
                    </div>
                    <div className={style.textBlock}>
                        <div className={style.name}>
                            Бюджет
                        </div>
                        <div className={style.text}>
                            $200 000 000
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
                            194 мин./03:14
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
}
export default Main;