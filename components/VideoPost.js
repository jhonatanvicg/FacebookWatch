import styles from "../styles/components/VideoPost.module.css"

const VidepPost = ({ videoLink }) => {
    
    
    return ( 
        <div className={styles.video}>
            <video src={videoLink}></video>
        </div>
     );
}
 
export default VidepPost;