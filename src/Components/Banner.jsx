import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faPlus, faPlay } from '@fortawesome/free-solid-svg-icons';
import '../styles/Banner.css';

const Banner = () => {

    const recortar = (texto, n) => {
        return (texto.length > n) ? texto.substr (0, n - 1) + '...' : texto;
    }

    return (
        <header className="banner">  
            <div className="banner_contents">
                
                <h1 className="banner_title">Nombre de la peli</h1>
                
                <div className="banner_buttons">
                    <button className="banner_but"><FontAwesomeIcon icon={faPlay} /> Play</button>
                    <button className="banner_but"><FontAwesomeIcon icon={faPlus} /> Mi lista</button>
                </div>
                
                <h1 className="banner_description"> {recortar 
                    (`Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint magni et, harum animi aliquid quis repellendus velit at voluptatibus, omnis mollitia totam possimus. Sequi aspernatur tempora repellat quod quas! Temporibus.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio accusantium rerum quas, molestias, mollitia odio voluptatum exercitationem quo explicabo est ea. Quae dolorem fuga incidunt totam, recusandae voluptatem officiis rerum!
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum quia voluptate, eligendi beatae explicabo saepe qui, tempora molestias hic dolore impedit. Fugiat recusandae repudiandae aliquid eligendi, dolorem excepturi unde eos!`, 
                    150)}
                </h1>
            </div>
        </header>
    )
}

export default Banner;
