import styles from "./VideoPost.module.css"

const VideoPost = () => {
    return ( 
        <div className={styles.Video}>
            <video src="https://www.youtube.com/watch?v=yKDVMquVIMI"></video>
        </div>
     );
}
 
export default VideoPost;