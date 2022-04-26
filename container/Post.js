import HeaderPost from "../components/HeaderPost";
import VideoPost from "../components/VideoPost";
import Interactions from "../components/Interactions";
import styles from '../styles/container/Post.module.css';

const Post = () => {
    return ( 
        <div className={styles.post}>
            <HeaderPost />
            <VideoPost />
            <Interactions/>
        </div>
     );
}
 
export default Post;