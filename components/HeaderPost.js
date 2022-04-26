import {FaGlobeAmericas} from "react-icons/fa";
import {FaEllipsisH} from "react-icons/fa";
import styles from "../styles/components/HeaderPost.module.css";

const HeaderPost = () => {
    return ( 
        <div className={styles.Header}>
            <div className={styles.Header__PageData}>
                <div className={styles.PageData__ProfilePicture}>
                    <img src="/images/profile.jpg" alt="" />
                </div>
                <div className={styles.PageData__MainInfo}>
                    <div className={styles.MainInfo__Up}>
                        <div className={styles.Up__PageName}>
                            <p>Man Srote</p>
                            <p>Seguir</p>
                        </div>
                    </div>
                    <div className={styles.MainInfo__Down}>
                        <div className={styles.Down__Date}>
                            <p>
                                3 de Abril a las 15:00
                            </p>
                            <FaGlobeAmericas size={"12px"} color={"white"} />
                        </div>
                    </div>
                </div>
                <div className={styles.PageData__Options}>
                    <FaEllipsisH />
                </div>
            </div>
            <div className={styles.Header__Description}>
                <p>
                    Esto es una descripcion del video que estamos viendo jijijijijij que cool sera el resultado
                    Esto es una descripcion del video que estamos viendo jijijijijij que cool sera el resultado
                    Esto es una descripcion del video que estamos viendo jijijijijij que cool sera el resultado
                    Esto es una descripcion del video que estamos viendo jijijijijij que cool sera el resultado
                    Esto es una descripcion del video que estamos viendo jijijijijij que cool sera el resultado
                    Esto es una descripcion del video que estamos viendo jijijijijij que cool sera el resultado
                    Esto es una descripcion del video que estamos viendo jijijijijij que cool sera el resultado
                    Esto es una descripcion del video que estamos viendo jijijijijij que cool sera el resultado
                    Esto es una descripcion del video que estamos viendo jijijijijij que cool sera el resultado
                </p>
            </div>
        </div>
     );
}
 
export default HeaderPost;