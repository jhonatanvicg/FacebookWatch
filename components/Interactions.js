import {FaComment, FaShare} from "react-icons/fa";
import { AiFillLike } from "react-icons/ai";

import styles from '../styles/components/Interactions.module.css';

const Interactions = ({ comments, share, likes}) => {


    const valuesString = (value,typeData)=>{
        let lengthNumber = value.toString().split('').length;
        let visibleNumber = ''
        if(lengthNumber<=3){
            visibleNumber = lengthNumber + " " + typeData
        }else if(lengthNumber <=6){
            visibleNumber = lengthNumber +  " k " + typeData
        }else{
            visibleNumber = lengthNumber +  " mill " + typeData
        }
        
        return visibleNumber;
    }


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
                    <p>
                        {
                            valuesString(likes, "Likes")
                        }
                    </p>
                </div>
                <div className={styles.counter__comments}>
                    <p>
                        {
                            valuesString(comments, "comments")
                        }
                    </p>
                </div>
                <div className={styles.counter__shares}>
                    <p>
                        {
                            valuesString(share, "reproductions")
                        }
                    </p>
                </div>
            </div>
        </div>
     );
}
 
export default Interactions;