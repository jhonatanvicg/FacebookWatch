import ReactPlayer from "react-player";
import styles from "../styles/components/VideoPost.module.css"

const VidepPost = ({ videoLink }) => {
    
    return ( 
        <div className={styles.video}>
            <ReactPlayer 
                width="100%"
                height="100%"
                className={styles.videoFile} 
                controls url={videoLink} 
            />
        </div>
     );
}
 
export default VidepPost;