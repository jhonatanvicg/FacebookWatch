import {FaGlobeAmericas} from "react-icons/fa";
import {FaEllipsisH} from "react-icons/fa";
import styles from "../styles/components/HeaderPost.module.css";

const HeaderPost = ({pageName, description, date, urlImage}) => {

    const timePost = (timeValue) =>{

        let visibleTime = new Date(timeValue).toLocaleDateString(
            'es-mx',
            {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            }
          );

        return visibleTime + " a las " + new Date(timeValue).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    }


    return ( 
        <div className={styles.Header}>
            <div className={styles.Header__PageData}>
                <div className={styles.PageData__ProfilePicture}>
                    <img src="/images/profile.jpg" alt="" />
                </div>
                <div className={styles.PageData__MainInfo}>
                    <div className={styles.MainInfo__Up}>
                        <div className={styles.Up__PageName}>
                            <p>{pageName}</p>
                            <p>Seguir</p>
                        </div>
                    </div>
                    <div className={styles.MainInfo__Down}>
                        <div className={styles.Down__Date}>
                            <p>
                                {
                                    timePost(date)
                                }
                            </p>
                            <FaGlobeAmericas size={"12px"} color={"white"} />
                        </div>
                    </div>
                </div>
                <div className={styles.PageData__Options}>
                    <FaEllipsisH size={"25px"} className={styles.PageData__OptionsDots} />
                </div>
            </div>
            <div className={styles.Header__Description}>
                <p>
                    {description}
                </p>
            </div>
        </div>
     );
}
 
export default HeaderPost;