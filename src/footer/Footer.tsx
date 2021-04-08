import React from 'react';
import style from './Footer.module.css';
import vk from '../img/vk.png'
import facebook from '../img/facebook.png'
import twitter from '../img/twitter.png'
import telegram from '../img/telegram.png'
import instagram from '../img/instagram.png'
import youtube from '../img/youtube.png'

function Footer  ()  {

    return (
        <div className={style.footerBlock}>
            <div className={style.footerContainer}>
                <div className={style.footerIcon}>
                    <div className={style.icon}>
                    <a href={"https://vk.com/"} target={"blank"}><img src={vk} alt="vk"/></a>
                        <a href={"https://www.facebook.com/"} target={"blank"}><img src={facebook} alt="facebook"/></a>
                        <a href={"https://twitter.com/"} target={"blank"}><img src={twitter} alt="twitter"/></a>
                        <a href={"https://telegram.org/"} target={"blank"}><img src={telegram} alt="telegram"/></a>
                        <a href={"https://www.instagram.com/"} target={"blank"}><img src={instagram} alt="instagram"/></a>
                        <a href={"https://www.youtube.com/"} target={"blank"}><img src={youtube} alt="youtube"/></a>
                    </div>
                </div>

                <div className={style.footerYear}>
                    © 2020 – 2021,SearchMovies
                </div>
            </div>
        </div>
    );
}
export default Footer;