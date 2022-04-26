import {FaComment, FaShare} from "react-icons/fa";
import { AiFillLike } from "react-icons/ai";
import styles from "./Interactions.module.css"


const Interactions = () => {
    return ( 
        <div className={styles.Interactions}>
            <div className={styles.Interactions__Actions}>
                <div className={styles.Actions__Likes}>
                    <AiFillLike color="white" className={styles.IconsOptions} />
                    <p>Me gusta</p>
                </div>

                <div className={styles.Actions__Comments}>
                    <FaComment color="white" className={styles.IconsOptions} />
                    <p>Comentar</p>
                </div>
                
                <div className={styles.Actions__Shares}>
                    <FaShare color="white" className={styles.IconsOptions}/>
                    <p>Compartir</p>
                </div>

            </div>
            <div className={styles.Interactions__Line}></div>
            <div className={styles.Interactions__Counter}>
                <div className={styles.Counter__Likes}>
                    <AiFillLike color="white" />
                    <p>35 Mil</p>
                </div>
                <div className={styles.Counter__Comments}>
                    <p>155 Comentarios</p>
                </div>
                <div className={styles.Counter__Shares}>
                    <p>962 mil reproducciones</p>
                </div>
            </div>
        </div>
     );
}
 
export default Interactions;