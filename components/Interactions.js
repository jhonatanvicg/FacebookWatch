import {FaComment, FaShare} from "react-icons/fa";
import { AiFillLike } from "react-icons/ai";

import styles from '../styles/components/Interactions.module.css';

const Interactions = () => {
    return ( 
        <div className={styles.interactions}>
            <div className={styles.interactions__actions}>
                <div className={styles.actions__likes}>
                    <AiFillLike color="white" className="IconsOptions" />
                    <p>Me gusta</p>
                </div>

                <div className={styles.actions__comments}>
                    <FaComment color="white" className="IconsOptions" />
                    <p>Comentar</p>
                </div>
                
                <div className={styles.actions__shares}>
                    <FaShare color="white" className="IconsOptions"/>
                    <p>Compartir</p>
                </div>

            </div>
            <div className={styles.interactions__line}></div>
            <div className={styles.interactions__counter}>
                <div className={styles.counter__likes}>
                    <AiFillLike color="white" />
                    <p>35 Mil</p>
                </div>
                <div className={styles.counter__comments}>
                    <p>155 Comentarios</p>
                </div>
                <div className={styles.counter__shares}>
                    <p>962 mil reproducciones</p>
                </div>
            </div>
        </div>
     );
}
 
export default Interactions;