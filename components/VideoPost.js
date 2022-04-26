import styles from '../styles/components/VideoPost.module.css';

const VideoPost = () => {
    return ( 
        <div className={styles.video}>
            <video src="https://www.youtube.com/watch?v=yKDVMquVIMI"></video>
        </div>
     );
}
 
export default VideoPost;